# Annotation before a call in nested parentheses

Additional layers of parentheses that contain nothing but the single call do not invalidate the annotation; the inner call is detected (spec "Usage 2").

## Code
```js
/* #__PURE__ */ (((foo())))
```

## Detected range
- 19 - 24
