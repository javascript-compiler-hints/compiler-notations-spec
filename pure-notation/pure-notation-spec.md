# `#__PURE__` Notation Specification (Draft)

## Overview

The `#__PURE__` notation is a special comment syntax used by JavaScript bundlers and minifiers to indicate that a function call, constructor instantiation, or property access has no side effects and can be safely removed during the optimization process. This notation allows developers to optimize their code by allowing minifiers to remove expressions where the value is unused.

## Syntax

The `#__PURE__` notation is used as a comment in JavaScript code and should be placed immediately before the function call, constructor instantiation or property access it refers to. The notation follows the `#__PURE__` or the `@__PURE__` keyword, enclosed within double underscores and double hashes.

```javascript
let pureExpression = /* @__PURE__ */ inPureFunction();
```

## Semantics

The `#__PURE__` notation provides a hint to the bundlers and minifiers that the annotated call or access has no side effects. The presence of `#__PURE__` or `@__PURE__` indicates that removing the annotated code will not change the behavior or state of the program.

During the optimization process, bundlers and minifiers can use this information to eliminate dead code paths or entire functions, resulting in a smaller bundle size and improved performance.

### Side Effects

An expression is considered to have side effects if it performs any action other than producing a value. Side effects include, but are not limited to, modifying variables or objects, reading or writing to files, making network requests, and interacting with the DOM.

Many bundling tools will by default attempt to detect code without side effects and remove it from the resulting bundle. Due to the dynamic nature of JavaScript, this often leads to false positives, especially with regard to function calls and property accesses. By using this annotation, it is possible to override the default detection logic of such tools on an ad hoc basis.

## Usage

The `#__PURE__` or `@__PURE__` notation can be used in the same ways as described in the previous specification:

### 1. Directly preceding an expression

To mark a specific expression or assignment as pure, place the `#__PURE__` or `@__PURE__` notation before the expression. The placement is valid if it precedes a call expression, new expression or member expression and is not separated from the expression by anything but white-space and comments. For constructors, the annotation needs to precede the keyword `new`. Tools should ignore comments in invalid positions:

```javascript
/* #__PURE__ */ pureOperation(); // valid

/* #__PURE__ */ new PureConstructor(); // valid

/* #__PURE__ */ obj.pureGetterOrNotAGetter; // valid

/* #__PURE__ */
pureOperation(); // valid

/* #__PURE__ The comment may contain additional text */ pureOperation(); // valid

const foo /* #__PURE__ */ = pureOperation(); // INVALID: "=" not allowed after annotation

/* #__PURE__ */ function foo() {} // INVALID: Not allowed on declarations
```

### 2. Preceding an expression in parentheses

A pure annotation that precedes an expression in parentheses is considered valid if the parentheses contain nothing but the pure expression:

```javascript
/*#__PURE__*/ (foo()); // valid

/*#__PURE__*/ (new Foo()); // valid

/*#__PURE__*/ (foo.bar); // valid

/*#__PURE__*/ (foo(), bar()); // INVALID, there is a comma expression in the parentheses
```

### 3. Preceding a chain of property accesses and calls

A pure annotation that precedes a chain of property accesses and calls is associated with the outermost call or property access of the chain. In that case, the callee or object is also considered to be free of side effects. To associate the annotation with an expression in the middle of such a chain, use parentheses:

```javascript
// valid, the callee is a.b().c.d
// side effects in a.b() or in the property accesses are ignored as well
/*#__PURE__*/ a.b().c.d();

// valid, the pure property access is `.c`
/*#__PURE__*/ a.b.c;

// valid, the pure property access is `.b`
// side effects in a() are ignored as well (see note below)
/*#__PURE__*/ a().b;

// valid, but it may still be retained unless the tool knows that accessing
// b is not a side effect
(/*#__PURE__*/ a()).b;
```

Note: when a chain contains a call and ends in a property access, the annotation precedes both the call and the access, and tools differ in which one they associate it with. For portable code, use parentheses to make the intent explicit: `/*#__PURE__*/ (a().b)` for the access, or `(/*#__PURE__*/ a()).b` for the call.

### 4. Preceding a destructuring pattern

A pure annotation that directly precedes an object or array pattern in a variable declaration marks the destructuring as free of side effects.

```javascript
const /*#__PURE__*/ { a, b } = obj; // valid

const /*#__PURE__*/ [x, y] = arr; // valid

/*#__PURE__*/ const { c } = obj; // INVALID: must precede the pattern, not the declaration
```

## Compatibility

The notation is originally brought up by UglifyJS in [mishoo/UglifyJS#1448](https://github.com/mishoo/UglifyJS/pull/1448). As 2023, it's supported by many popular JavaScript bundlers and minifiers. However, note that support may vary depending on the specific versions and configurations of these tools.

Developers should consult the documentation of their chosen bundler or minifier to ensure compatibility and proper usage of the `#__PURE__` or `@__PURE__` notation.

Reference to the [Compatibility Table](./pure-notation-compatibility.md) for a list of supported tools.

