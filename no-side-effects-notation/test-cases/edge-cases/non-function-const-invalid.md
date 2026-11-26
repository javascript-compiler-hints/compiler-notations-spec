# Annotation on a numeric const is invalid

A numeric initializer is neither a function nor a call, so the annotation is ignored (spec "Usage 2" and "Usage 4").

## Code
```js
/* #__NO_SIDE_EFFECTS__ */
const x = 1
```

## Detected range
- (none)
