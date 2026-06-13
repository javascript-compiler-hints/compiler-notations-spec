# Annotation on a non-function const is invalid

The notation marks functions as side-effect free. A `const` whose initializer is not a function has nothing to annotate, so the annotation is ignored.

## Code
```js
/* #__NO_SIDE_EFFECTS__ */
const x = 1
```

## Detected range
- (none)
