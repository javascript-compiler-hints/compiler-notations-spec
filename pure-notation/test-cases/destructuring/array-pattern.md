# Annotation before an array pattern

A pure annotation that directly precedes an array pattern in a variable declaration marks the destructuring as pure. The pattern is detected (spec "Usage 4").

## Code
```js
const /* #__PURE__ */ [a] = arr
```

## Detected range
- 22 - 25
