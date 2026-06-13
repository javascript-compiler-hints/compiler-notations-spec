# Annotation before a chain not ending in a call is invalid

When the chain does not end in a call (it ends in a property access), the annotation has no call to associate with and is ignored (spec "Usage 3").

## Code
```js
/* #__PURE__ */ a().b
```

## Detected range
- (none)
