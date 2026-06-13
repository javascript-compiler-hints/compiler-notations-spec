# Annotation placed after the `new` keyword is invalid

For constructors the annotation must precede the `new` keyword. Placed between `new` and the callee it is not in a valid position and is ignored (spec "Usage 1").

## Code
```js
new /* #__PURE__ */ Foo()
```

## Detected range
- (none)
