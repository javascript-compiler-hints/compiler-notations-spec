# Annotation on a class method is invalid

The notation applies to function and `const` declarations, not to class methods, so the annotation is ignored.

## Code
```js
class C {
  /* #__NO_SIDE_EFFECTS__ */
  m() {}
}
```

## Detected range
- (none)
