# Annotate `new` initializers

The annotation applies to the value produced by the `new` expression (spec "Usage 4").
The annotation must precede the `new` keyword.
An annotation after the `new` keyword is ignored.

## Code
```js
const a = /*#__NO_SIDE_EFFECTS__*/ new Factory();
const b = /*@__NO_SIDE_EFFECTS__*/ (new Factory);
const c = new /*#__NO_SIDE_EFFECTS__*/ Factory();
```

## Detected range
- 35 - 48
- 86 - 97
