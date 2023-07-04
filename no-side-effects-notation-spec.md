# `#__NO_SIDE_EFFECTS__` Notation Specification (Draft)

## Overview

The `#__NO_SIDE_EFFECTS__` notation is a special comment syntax used to indicate that a function is side-effect free, meaning it has no observable effects on the program state beyond returning a value. This notation allows developers and bundlers to optimize code by treating every call site of the annotated function as pure, enabling more aggressive dead code elimination.

## Syntax

The `#__NO_SIDE_EFFECTS__` notation is used as a comment in JavaScript code and should be placed before the function declaration. The notation follows the `#__NO_SIDE_EFFECTS__` or `@__NO_SIDE_EFFECTS__` keyword, enclosed within double underscores and double hashes.

```javascript
/*#__NO_SIDE_EFFECTS__*/
function sideEffectFreeFunction() {
  // Function code here
}
```

## Semantics

The `#__NO_SIDE_EFFECTS__` notation provides a hint to developers and bundlers that the annotated function is side-effect free. It implies that calling this function will not produce any side effects beyond the returned value and can be safely removed during the optimization process when unused.

### Side Effects

A function is considered to have side effects if it performs any action other than returning a value. Side effects include, but are not limited to, modifying variables or objects, reading or writing to files, making network requests, and interacting with the DOM.

By using the `#__NO_SIDE_EFFECTS__` notation, developers assert that the annotated function does not have any such side effects.

## Usage

The `#__NO_SIDE_EFFECTS__` or `@__NO_SIDE_EFFECTS__` notation can be used in the same ways as described in the previous specification:

### 1. Function Declaration

The `#__NO_SIDE_EFFECTS__` notation should be used to mark functions that are known to be side-effect free. It can be applied to function declarations and function expressions.

```javascript
/*#__NO_SIDE_EFFECTS__*/
function sideEffectFreeFunction() {
  // Function code here
}

var myVariable = /*#__NO_SIDE_EFFECTS__*/ function() {
  // Function code here
};
```

### 2. Const Variable Declaration

The `#__NO_SIDE_EFFECTS__` notation can be used to mark `const` variables that has immediate function assignment. 

```javascript
/*#__NO_SIDE_EFFECTS__*/
const sideEffectFreeVariable = () => {
  // Function code here
};
```

### 3. Exported Function Declaration

The `#__NO_SIDE_EFFECTS__` notation can be used to mark functions that are known to be side-effect free. It can be applied to exported function declarations and exported function expressions.

```javascript
/*#__NO_SIDE_EFFECTS__*/
export function sideEffectFreeFunction() {
  // Function code here
}

 /*#__NO_SIDE_EFFECTS__*/ 
export const myVariable = function() {
  // Function code here
};
```

## Compatibility

This notation is originally brought up by Rollup in [rollup/rollup#5024](https://github.com/rollup/rollup/pull/5024).

Developers should consult the documentation of their chosen bundler or minifier to ensure compatibility and proper usage of this notation.

Reference to the [Compatibility Table](./pure-notation-compatibility) for a list of supported tools.

