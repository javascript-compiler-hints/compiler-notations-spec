# Annotate the value returned by a call

The annotation before a call initializer marks the function that the call returns (spec "Usage 4").

## Code
```js
const f = /*#__NO_SIDE_EFFECTS__*/ make(creationArgument());
```

## Detected range
- 35 - 59
