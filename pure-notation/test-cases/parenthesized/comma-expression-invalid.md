# Annotation before a comma expression in parentheses is invalid

The parentheses are valid only when they contain nothing but a single call. A comma (sequence) expression contains more than one expression, so the annotation is ignored (spec "Usage 2").

## Code
```js
/* #__PURE__ */ (foo(), bar())
```

## Detected range
- (none)
