# Annotation before a member expression that is updated

The annotation directly precedes `obj.foo`, but that member expression is the operand of `++`. Removing it is not possible without removing the update, so the annotation has no effect and is ignored (spec "Usage 1").

## Code
```js
/* #__PURE__ */ obj.foo++
```

## Detected range
- (none)
