# Annotation before a function-expression IIFE

An immediately invoked function expression ends in a call, so the whole invocation is associated with the annotation and marked pure (spec "Usage 2" / "Usage 3").

## Code
```js
/* #__PURE__ */ (function () {})()
```

## Detected range
- 16 - 34
