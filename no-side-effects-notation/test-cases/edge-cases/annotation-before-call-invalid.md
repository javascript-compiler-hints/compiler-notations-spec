# Annotation before a call expression is invalid

The notation annotates a function declaration, not a call site. Placed before a call expression it has no declaration to mark and is ignored. (Marking an individual call as pure is the role of `#__PURE__`.)

## Code
```js
/* #__NO_SIDE_EFFECTS__ */
foo()
```

## Detected range
- (none)
