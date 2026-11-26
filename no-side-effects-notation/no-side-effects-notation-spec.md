# `#__NO_SIDE_EFFECTS__` Notation Specification (Draft)

## Overview

The `#__NO_SIDE_EFFECTS__` notation is a special comment syntax used to indicate that a function is side-effect free, meaning it has no observable effects on the program state beyond returning a value. This notation allows developers and bundlers to optimize code by treating every call site of the annotated function as pure, enabling more aggressive dead code elimination.

## Syntax

The `#__NO_SIDE_EFFECTS__` notation is used as a comment in JavaScript code and should be placed before the function declaration or in another position described in [Usage](#usage). The notation follows the `#__NO_SIDE_EFFECTS__` or `@__NO_SIDE_EFFECTS__` keyword, enclosed within double underscores and double hashes.

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

The `#__NO_SIDE_EFFECTS__` or `@__NO_SIDE_EFFECTS__` notation can be used in the forms described below.

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

### 4. Const Variable Declaration with a Call or `new` Initializer

The *call-result form* marks the function produced by a call or `new` initializer of a `const`.
Place the annotation immediately before the initializer of a `const` declarator with an identifier binding.
An annotation before the `const` keyword or before the `export` keyword of an `export const` declaration applies to the first declarator.
To annotate a later declarator, place the annotation before its initializer.

The initializer must have a form accepted by the [`#__PURE__` notation](../pure-notation/pure-notation-spec.md), including ordinary calls, member calls, optional-chain calls, and `new` expressions.
Grouping parentheses may enclose the initializer.
The call-result form is ignored for other initializers, such as tagged templates and chains ending in a property access.
The call-result form is also ignored for `let`, `var`, and destructuring bindings.
A function or arrow function initializer follows Usage 2 and 3 instead.

```javascript
const f = /*#__NO_SIDE_EFFECTS__*/ make();
export const g = /*#__NO_SIDE_EFFECTS__*/ options.make();
const h = /*#__NO_SIDE_EFFECTS__*/ factory?.();
const k = /*#__NO_SIDE_EFFECTS__*/ new Factory();
```

The annotation asserts that the value produced by the initializer is a side-effect-free function.
For a chain ending in a call, the assertion applies to the result of its final call.
To also mark the initializer itself as pure, add `#__PURE__` as described in Usage 5.

### 5. Combining with `#__PURE__`

The [`#__PURE__` notation](../pure-notation/pure-notation-spec.md) applies to the initializer itself.
The `#__NO_SIDE_EFFECTS__` notation applies to the function produced by the initializer.
Write each notation in its own comment.
In the call-result form, a comment that also contains another notation, such as `#__PURE__`, does not count as a `#__NO_SIDE_EFFECTS__` annotation.
Whether the `#__PURE__` in such a comment counts follows the `#__PURE__` notation.
When both comments precede the initializer, they can appear in either order.

```javascript
const f1 = /* #__PURE__ */ /* #__NO_SIDE_EFFECTS__ */ make();
const f2 = /* #__NO_SIDE_EFFECTS__ */ /* #__PURE__ */ make();
/* #__NO_SIDE_EFFECTS__ */
const f3 = /* #__PURE__ */ make();
```

In all three declarations, the `make()` call is pure and its result is a side-effect-free function.

## Compatibility

This notation is originally brought up by Rollup in [rollup/rollup#5024](https://github.com/rollup/rollup/pull/5024).

Developers should consult the documentation of their chosen bundler or minifier to ensure compatibility and proper usage of this notation.

Reference to the [Compatibility Table](./no-side-effects-notation-compatibility.md) for a list of supported tools.

