# Annotation before a standalone call expression is invalid

The annotation before a call counts only when the call initializes a `const` (spec "Usage 4").
Here the call is an expression statement, so the annotation is ignored.
To mark a single call as pure, use `#__PURE__`.

## Code
```js
/* #__NO_SIDE_EFFECTS__ */
foo()
```

## Detected range
- (none)
