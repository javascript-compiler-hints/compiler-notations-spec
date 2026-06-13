# Annotation on a call whose arguments have side effects

The annotation marks the outer call `foo(...)` as pure. The argument `bar()` is a separate, unannotated call and retains its own potential side effects; only the outer call is detected (spec "Usage 1").

## Code
```js
/* #__PURE__ */ foo(bar())
```

## Detected range
- 16 - 26
