# Annotation before a chain ending in a property access that contains a call

The annotation is associated with the outermost expression of the chain, the property access `.b`, so the whole chain is detected and side effects in `a()` are ignored as well. Tools differ on this form, so the spec recommends parentheses for portable code (spec "Usage 3").

## Code
```js
/* #__PURE__ */ a().b
```

## Detected range
- 16 - 21
