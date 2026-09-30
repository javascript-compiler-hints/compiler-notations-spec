# `#__PURE__` Conformance Test Cases

Each file in this directory tree is one conformance test case for the [`#__PURE__` notation](../pure-notation-spec.md).

## File format

````markdown
# <title>

<why this is or isn't detected>

## Code
```js
/* #__PURE__ */ foo()
```

## Detected range
- 16 - 21
````

## Conventions

- "Offsets" are 0-based and end-exclusive (`[start, end)`), counted in UTF-16 code units from the first character inside the ` ```js ` fence.
- Multiple detections are listed as multiple bullets, ordered by start offset.
- No detection (an ignored or invalid annotation) is written as a single bullet: `- (none)`.
- A `#__PURE__` detected range covers the marked call, `new` or member expression, or destructuring pattern. The whole chain for a chain of calls and property accesses, and the inner expression for a parenthesized form.

## Validate

```bash
pnpm install
pnpm test
```
