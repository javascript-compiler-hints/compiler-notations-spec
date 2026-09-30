# Annotation before the operand of `delete`

The annotation directly precedes `obj.foo`, but that member expression is the operand of `delete`. Removing it is not possible without removing the `delete`, so the annotation has no effect and is ignored (spec "Usage 1").

## Code
```js
delete /* #__PURE__ */ obj.foo
```

## Detected range
- (none)
