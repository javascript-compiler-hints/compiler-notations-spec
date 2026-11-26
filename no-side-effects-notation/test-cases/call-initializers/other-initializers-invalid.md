# Ignore other initializers

The annotation is ignored on tagged templates, literals, chains ending in a property access, and conditional expressions (spec "Usage 4").

## Code
```js
const a = /*#__NO_SIDE_EFFECTS__*/ template`literal`;
const b = /*#__NO_SIDE_EFFECTS__*/ 0;
const c = /*#__NO_SIDE_EFFECTS__*/ make().f;
const d = /*#__NO_SIDE_EFFECTS__*/ (condition ? makeOne() : makeTwo());
const e = /*#__NO_SIDE_EFFECTS__*/ make?.().f;
```

## Detected range
- (none)
