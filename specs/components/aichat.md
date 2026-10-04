---
name: AIChat
status: implemented
category: feedback
frameworks:
  react: v1.0.0
  htmx: v0.28.0
tokens:
  - "color.border"
  - "color.primary"
  - "color.primary-fg"
  - "color.surface"
  - "color.surface-hover"
  - "color.text"
  - "color.text-muted"
  - "font.size-sm"
  - "radius.md"
  - "space.2"
  - "space.3"
a11y:
  - "The message list is a labelled log region (aria-live polite): incoming messages announce without moving focus."
  - "The input is labelled; send is disabled on empty input and while loading."
---

# AIChat

Non-streaming chat surface: message list with roles, input + send,
aria-live announcements for incoming messages. Streaming is deferred
to a follow-up (the list contract already supports it: appends announce
identically).

## react

`<AIChat messages?/onSend?/placeholder?/sendText?/inputLabel?/ariaLabel?/
messageTemplate?/inputTemplate?/loading?/disabled?>` — `onSend(text)`
receives trimmed input (parent appends the user message and, when
ready, the assistant reply); the box clears on send. Templates override
message and input rendering.

```tsx
const [messages, setMessages] = useState<ChatMessage[]>([]);
<AIChat
  messages={messages}
  onSend={(text) => {
    setMessages((m) => [...m, { role: "user", content: text }]);
    reply(text).then((r) =>
      setMessages((m) => [...m, { role: "assistant", content: r }])
    );
  }}
/>
```

## htmx

`[data-dx-chat]` form with `[data-dx-chat-list]` (aria-live polite) +
`[data-dx-chat-input]` + submit. Submit appends the user message and
dispatches `dx:chat-send{text}`; the app answers with
`dxChat.appendMessage(host|selector, { role, text })`. See
`lib/components/chat/chat.html` for reference markup.

```html
<form data-dx-chat>…</form>
```

## Tests

| Scenario | Assertion |
|---|---|
| Render (both) | labelled log with aria-live polite + roles |
| Send (both) | trimmed text delivered (onSend / dx:chat-send), box cleared |
| Empty/loading (both) | no send when empty or busy; send disabled |
| Templates (react) | message + input overrides render |
| Replies (both) | appended messages carry role styling + announce |
| No-list host (htmx) | appendMessage is a safe no-op |

Every framework implementation must pass an equivalent matrix (per
`docs/DEVELOPMENT_STRATEGY.md`).
