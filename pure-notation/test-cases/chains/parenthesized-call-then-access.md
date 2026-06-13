# Annotation inside parentheses before a trailing property access

Parentheses associate the annotation with the inner call `a()`, which is detected as pure. The trailing `.b` access outside the parentheses is not part of the annotated call (spec "Usage 3").

## Code
```js
(/* #__PURE__ */ a()).b
```

## Detected range
- 17 - 20
