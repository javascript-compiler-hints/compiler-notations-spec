# Annotate member calls and chains ending in a call

Member calls, computed member calls, parenthesized calls, and chains ending in a call are accepted (spec "Usage 4").
The annotation marks the value returned by the last call.

## Code
```js
const a = /*#__NO_SIDE_EFFECTS__*/ factory.make();
const b = /*@__NO_SIDE_EFFECTS__*/ factory[key]();
const c = /*#__NO_SIDE_EFFECTS__*/ (getFactory().make());
const d = /*#__NO_SIDE_EFFECTS__*/ makeCurried()();
```

## Detected range
- 35 - 49
- 86 - 100
- 138 - 157
- 195 - 210
