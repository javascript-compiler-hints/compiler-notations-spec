# Annotation before a member expression that is assigned to

The annotation directly precedes `obj.foo`, but that member expression is the target of an assignment. Removing it is not possible without removing the assignment, so the annotation has no effect and is ignored (spec "Usage 1").

## Code
```js
/* #__PURE__ */ obj.foo = 3
```

## Detected range
- (none)
