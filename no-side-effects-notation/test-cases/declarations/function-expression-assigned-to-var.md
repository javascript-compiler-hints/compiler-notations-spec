# Annotated function expression assigned to a variable

An inline `/* #__NO_SIDE_EFFECTS__ */` comment before a function expression marks that function expression as side-effect free (spec "Usage 1").

## Code
```js
var foo = /* #__NO_SIDE_EFFECTS__ */ function () {}
```

## Detected range
- 37 - 51
