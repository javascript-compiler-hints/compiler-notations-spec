# Annotation followed by another comment before the call

Only whitespace and comments may separate the annotation from the call. An additional comment between the annotation and the call keeps it valid (spec "Usage 1").

## Code
```js
/*#__PURE__*/ /* other */ foo()
```

## Detected range
- 26 - 31
