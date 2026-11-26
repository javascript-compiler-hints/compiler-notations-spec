# Annotate optional-chain call initializers

The annotation applies to the value produced by an optional chain ending in a call (spec "Usage 4").

## Code
```js
const a = /*#__NO_SIDE_EFFECTS__*/ make?.();
const b = /*#__NO_SIDE_EFFECTS__*/ obj?.make();
const c = /*#__NO_SIDE_EFFECTS__*/ obj.make?.();
```

## Detected range
- 35 - 43
- 80 - 91
- 128 - 140
