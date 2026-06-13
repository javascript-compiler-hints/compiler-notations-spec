# Annotation directly preceding a call

A `/* #__PURE__ */` comment placed immediately before a call expression, separated only by whitespace, marks that call as pure (spec "Usage 1: Directly preceding a call").

## Code
```js
/* #__PURE__ */ foo()
```

## Detected range
- 16 - 21
