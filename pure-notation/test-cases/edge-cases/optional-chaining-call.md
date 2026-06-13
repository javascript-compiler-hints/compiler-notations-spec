# Annotation before an optional call

An optional call `foo?.()` is still a call expression, so the annotation is valid and marks it pure (spec "Usage 1").

## Code
```js
/* #__PURE__ */ foo?.()
```

## Detected range
- 16 - 23
