# Annotation before the declaration instead of the pattern is invalid

The annotation must directly precede the pattern. Placed before `const`, it precedes a declaration, so it is ignored (spec "Usage 4").

## Code
```js
/* #__PURE__ */ const { a } = obj
```

## Detected range
- (none)
