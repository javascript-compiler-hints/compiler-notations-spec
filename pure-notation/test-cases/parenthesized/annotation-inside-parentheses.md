# Annotation inside the parentheses before the call

The annotation may sit inside the parentheses immediately before the single call they contain. The call is detected (spec "Usage 2").

## Code
```js
(/* #__PURE__ */ foo())
```

## Detected range
- 17 - 22
