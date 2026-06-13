# Lowercase keyword is not recognized

The keyword is case-sensitive. A lowercase `#__pure__` is not a pure annotation and is ignored (spec "Syntax").

## Code
```js
/* #__pure__ */ foo()
```

## Detected range
- (none)
