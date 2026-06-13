# Annotation separated from the call by `=` is invalid

The annotation must not be separated from the call by anything but whitespace and comments. An `=` token between the annotation and the call makes the position invalid, so the annotation is ignored (spec "Usage 1").

## Code
```js
const x /* #__PURE__ */ = foo()
```

## Detected range
- (none)
