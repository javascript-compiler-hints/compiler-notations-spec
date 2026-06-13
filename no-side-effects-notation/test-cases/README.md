# `#__NO_SIDE_EFFECTS__` Conformance Test Cases

Each file in this directory tree is one conformance test case for the [`#__NO_SIDE_EFFECTS__` notation](../no-side-effects-notation-spec.md).

## File format

````markdown
# <title>

<why this is or isn't detected>

## Code
```js
/* #__NO_SIDE_EFFECTS__ */
function foo() {}
```

## Detected range
- 27 - 44
````

## Conventions

- "Offsets" are 0-based and end-exclusive (`[start, end)`), counted in UTF-16 code units from the first character inside the ` ```js ` fence.
- Multiple detections are listed as multiple bullets, ordered by start offset.
- No detection (an ignored or invalid annotation) is written as a single bullet: `- (none)`.
- A `#__NO_SIDE_EFFECTS__` detected range covers the annotated function: the function declaration for declaration forms, or the initializer function/arrow expression for `const`/`var` forms. A leading `export` keyword is excluded.
