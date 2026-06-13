# Annotation before a member call chain

A chain mixing property accesses and calls that ends in a call is valid; the whole chain is detected (spec "Usage 3").

## Code
```js
/* #__PURE__ */ i.x(1).y(2).z(3)
```

## Detected range
- 16 - 32
