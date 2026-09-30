# Annotation before a chain of property accesses

A chain consisting only of property accesses is valid; the annotation is associated with the outermost access, and the inner accesses are considered free of side effects as well (spec "Usage 3").

## Code
```js
/* #__PURE__ */ a.b.c
```

## Detected range
- 16 - 21
