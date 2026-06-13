# Annotation before a `new` expression without parentheses

A `new` expression without an argument list is still a `new` expression, so the annotation is valid and marks it pure (spec "Usage 1").

## Code
```js
/* #__PURE__ */ new Foo
```

## Detected range
- 16 - 23
