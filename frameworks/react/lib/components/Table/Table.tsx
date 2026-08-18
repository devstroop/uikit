import { type ReactNode } from "react";
import styles from "./Table.module.css";

export interface Column<T> {
  key: string;
  header: ReactNode;
  align?: "start" | "center" | "end";
  render?: (row: T) => ReactNode;
}

export interface TableProps<T> {
  columns: readonly Column<T>[];
  rows: readonly T[];
  rowKey: (row: T) => string;
  empty?: ReactNode;
  className?: string;
}

export function Table<T>({ columns, rows, rowKey, empty, className }: TableProps<T>) {
  return (
    <div className={[styles.wrap, className].filter(Boolean).join(" ")}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className={column.align != null ? styles[column.align] : undefined}
                scope="col"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={rowKey(row)}>
              {columns.map((column) => (
                <td
                  key={column.key}
                  className={column.align != null ? styles[column.align] : undefined}
                >
                  {column.render != null ? column.render(row) : (row as Record<string, ReactNode>)[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {rows.length === 0 && empty != null && <div className={styles.empty}>{empty}</div>}
    </div>
  );
}