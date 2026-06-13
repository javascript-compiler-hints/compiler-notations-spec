# Annotation before a call used as an array element

The annotation immediately precedes a call expression that happens to be an array element. The call is marked pure (spec "Usage 1").

## Code
```js
[/* #__PURE__ */ foo()]
```

## Detected range
- 17 - 22
