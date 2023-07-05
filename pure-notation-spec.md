# `#__PURE__` Notation Specification (Draft)

## Overview

The `#__PURE__` notation is a special comment syntax used by JavaScript bundlers and minifiers to indicate that a function or expression has no side effects and can be safely removed during the optimization process. This notation allows developers to optimize their code by removing dead code or unused functions.

## Syntax

The `#__PURE__` notation is used as a comment in JavaScript code and should be placed immediately before the function or expression it refers to. The notation follows the `#__PURE__` or the `@__PURE__` keyword, enclosed within double underscores and double hashes.

```javascript
/*#__PURE__*/
function pureFunction() {
  // Function code here
}

/* @__PURE__ */
var pureExpression = someValue;
```

## Semantics

The `#__PURE__` notation provides a hint to the bundlers and minifiers that the annotated expression has no side effects. The presence of `#__PURE__` or `@__PURE__` indicates that removing the annotated code will not change the behavior or state of the program.

During the optimization process, bundlers and minifiers can use this information to eliminate dead code paths or entire functions, resulting in a smaller bundle size and improved performance.

### Side Effects

A function or expression is considered to have side effects if it performs any action other than returning a value. Side effects include, but are not limited to, modifying variables or objects, reading or writing to files, making network requests, and interacting with the DOM.

## Usage

The `#__PURE__` or `@__PURE__` notation can be used in the same ways as described in the previous specification:

### 1. Expression-Level Annotation

To mark a specific expression or assignment as pure, place the `#__PURE__` or `@__PURE__` notation before the expression.

```javascript
/* #__PURE__ */
var pureExpression = pureOperation();
```

### 2. Inline Annotation

In some cases, it may be necessary to annotate a specific line of code within a function. To achieve this, place the `#__PURE__` or `@__PURE__` notation before the line of code.

```javascript
function impureFunction() {
    var result = /*#__PURE__*/ expensiveOperation(); // Inline annotation
    // Function code here
}
```

## Compatibility

The notation is originally brought up by UglifyJS in [mishoo/UglifyJS#1448](https://github.com/mishoo/UglifyJS/pull/1448). As 2023, it's supported by many popular JavaScript bundlers and minifiers. However, note that support may vary depending on the specific versions and configurations of these tools.

Developers should consult the documentation of their chosen bundler or minifier to ensure compatibility and proper usage of the `#__PURE__` or `@__PURE__` notation.

Reference to the [Compatibility Table](./pure-notation-compatibility.md) for a list of supported tools.

