# Annotate one declarator of a declaration

An annotation before a declaration applies to its first declarator (spec "Usage 4").
It does not move to a later declarator when the first one is not a call.
An annotation before the initializer of any declarator applies to that declarator.
An annotation before the `=` token is ignored.

## Code
```js
const f = /*#__NO_SIDE_EFFECTS__*/ make(), g = makeOther();
/*#__NO_SIDE_EFFECTS__*/
const a = make(), b = makeOther();
/*#__NO_SIDE_EFFECTS__*/
export const c = make(), d = makeOther();
const e = make(), h = /*#__NO_SIDE_EFFECTS__*/ makeOther();
/*#__NO_SIDE_EFFECTS__*/
const j = 0, k = make();
const l /*#__NO_SIDE_EFFECTS__*/ = make();
```

## Detected range
- 35 - 41
- 95 - 101
- 162 - 168
- 234 - 245
