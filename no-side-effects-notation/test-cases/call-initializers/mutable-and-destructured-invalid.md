# Ignore call initializers of `let`, `var`, and destructuring bindings

The call-result form applies only to `const` declarators with an identifier binding (spec "Usage 4").

## Code
```js
let a = /*#__NO_SIDE_EFFECTS__*/ make();
var b = /*#__NO_SIDE_EFFECTS__*/ make();
const { f } = /*#__NO_SIDE_EFFECTS__*/ makeObject();
const [g] = /*#__NO_SIDE_EFFECTS__*/ makeArray();
```

## Detected range
- (none)
