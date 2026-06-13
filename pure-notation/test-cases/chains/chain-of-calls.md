# Annotation before a chain of immediately invoked calls

A chain of calls such as `d(1)(2)(3)` ends in a call, so the whole chain is associated with the annotation and marked pure (spec "Usage 3").

## Code
```js
/* #__PURE__ */ d(1)(2)(3)
```

## Detected range
- 16 - 26
