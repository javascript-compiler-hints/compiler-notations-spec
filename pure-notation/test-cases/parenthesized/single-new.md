# Annotation before a parenthesized `new` expression

Parentheses containing nothing but a single `new` expression keep the annotation valid; the inner `new` expression is detected (spec "Usage 2").

## Code
```js
/* #__PURE__ */ (new Foo())
```

## Detected range
- 17 - 26
