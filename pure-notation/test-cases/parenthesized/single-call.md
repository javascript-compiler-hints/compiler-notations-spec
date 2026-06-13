# Annotation before a parenthesized call

A pure annotation that precedes a call wrapped in parentheses is valid when the parentheses contain nothing but that call. The inner call is detected (spec "Usage 2: Preceding a call in parentheses").

## Code
```js
/* #__PURE__ */ (foo())
```

## Detected range
- 17 - 22
