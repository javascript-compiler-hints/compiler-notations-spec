# Annotation before a chain ending in a call

A pure annotation before a chain of property accesses and calls is valid when the chain ends with a call; it is associated with that final call, and the callee (including intermediate calls and property accesses) is treated as side-effect free (spec "Usage 3").

## Code
```js
/* #__PURE__ */ a.b().c.d()
```

## Detected range
- 16 - 27
