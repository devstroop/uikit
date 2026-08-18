import { type HTMLAttributes } from "react";
import styles from "./Column.module.css";

export type ColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type ColumnOffset = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export interface ColumnProps extends HTMLAttributes<HTMLDivElement> {
  size?: ColumnSize;
  offset?: ColumnOffset;
  sizeSm?: ColumnSize;
  offsetSm?: ColumnOffset;
  sizeMd?: ColumnSize;
  offsetMd?: ColumnOffset;
  sizeLg?: ColumnSize;
  offsetLg?: ColumnOffset;
  sizeXl?: ColumnSize;
  offsetXl?: ColumnOffset;
}

const TIERS = [
  ["", "size", "offset"],
  ["sm", "sizeSm", "offsetSm"],
  ["md", "sizeMd", "offsetMd"],
  ["lg", "sizeLg", "offsetLg"],
  ["xl", "sizeXl", "offsetXl"],
] as const;

export function Column({ className, ...props }: ColumnProps) {
  const classes = [styles.column];
  for (const [tier, sizeProp, offsetProp] of TIERS) {
    const size = props[sizeProp];
    const offset = props[offsetProp];
    if (size != null) {
      classes.push(styles[`${tier}Size${size}`]);
    }
    if (offset != null && offset > 0) {
      classes.push(styles[`${tier}Offset${offset}`]);
    }
  }
  const { size: _s, offset: _o, sizeSm: _sm, offsetSm: _osm, sizeMd: _md, offsetMd: _omd, sizeLg: _lg, offsetLg: _olg, sizeXl: _xl, offsetXl: _oxl, ...rest } = props;
  return <div className={[...classes, className].filter(Boolean).join(" ")} {...rest} />;
}