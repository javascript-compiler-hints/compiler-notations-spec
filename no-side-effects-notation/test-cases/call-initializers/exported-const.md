# Annotate exported `const` call initializers

The annotation can precede the initializer or the `export` keyword (spec "Usage 4").

## Code
```js
export const f = /*#__NO_SIDE_EFFECTS__*/ make();
/* #__NO_SIDE_EFFECTS__ */
export const g = makeOther();
```

## Detected range
- 42 - 48
- 94 - 105
