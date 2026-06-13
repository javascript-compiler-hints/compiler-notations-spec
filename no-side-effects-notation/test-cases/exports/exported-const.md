# Annotated exported const declaration

A `/* #__NO_SIDE_EFFECTS__ */` comment before an exported `const` declaration whose initializer is a function marks it as side-effect free (spec "Usage 3").

## Code
```js
/* #__NO_SIDE_EFFECTS__ */
export const foo = () => {}
```

## Detected range
- 46 - 54
