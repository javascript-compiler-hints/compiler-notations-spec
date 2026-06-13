# Annotation before an arrow-function IIFE

An immediately invoked arrow function ends in a call, so the whole invocation is marked pure (spec "Usage 2" / "Usage 3").

## Code
```js
/* #__PURE__ */ (() => {})()
```

## Detected range
- 16 - 28
