# Annotation before a function declaration is invalid

The notation is only valid before a call or `new` expression. A function declaration is neither, so the annotation is ignored (spec "Usage 1").

## Code
```js
/* #__PURE__ */ function foo() {}
```

## Detected range
- (none)
