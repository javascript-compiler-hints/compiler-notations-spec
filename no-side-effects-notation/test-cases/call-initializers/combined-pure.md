# Combine `#__PURE__` and `#__NO_SIDE_EFFECTS__` in separate comments

`#__NO_SIDE_EFFECTS__` is recognized before or after `#__PURE__` when each notation has its own comment (spec "Usage 5").
It is also recognized before `const` when `#__PURE__` precedes the initializer.
A comment that contains both notations does not count as a `#__NO_SIDE_EFFECTS__` annotation.

## Code
```js
const f1 = /* #__PURE__ */ /* #__NO_SIDE_EFFECTS__ */ make();
const f2 = /* #__NO_SIDE_EFFECTS__ */ /* #__PURE__ */ make();
const f3 = /* #__PURE__ #__NO_SIDE_EFFECTS__ */ make();
const f4 = /* #__NO_SIDE_EFFECTS__ #__PURE__ */ make();
/* #__NO_SIDE_EFFECTS__ */
const f5 = /* #__PURE__ */ make();
```

## Detected range
- 54 - 60
- 116 - 122
- 290 - 296
