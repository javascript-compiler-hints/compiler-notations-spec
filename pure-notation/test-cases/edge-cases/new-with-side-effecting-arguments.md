# Annotation on a `new` expression whose arguments have side effects

The annotation marks the `new Foo(...)` construction as pure. The argument `bar()` is a separate, unannotated call and retains its own potential side effects; only the construction is detected (spec "Usage 1").

## Code
```js
/* #__PURE__ */ new Foo(bar())
```

## Detected range
- 16 - 30
