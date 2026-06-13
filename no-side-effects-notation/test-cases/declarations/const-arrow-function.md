# Annotated const arrow function

A `/* #__NO_SIDE_EFFECTS__ */` comment before a `const` declaration whose initializer is an arrow function marks it as side-effect free (spec "Usage 2").

## Code
```js
/* #__NO_SIDE_EFFECTS__ */
const foo = () => {}
```

## Detected range
- 39 - 47
