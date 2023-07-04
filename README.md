# JavaScript Compiler Hint Notation Specifications (Draft)

This repository contains the community specifications commonly used JavaScript compiler hint notations, including:

- [`#__PURE__` Notation Specification](./pure-notation-spec.md)
- [`#__NO_SIDE_EFFECTS__` Notation Specification](./no-side-effects-notation-spec.md)

## Motivation

JavaScript bundlers and minifiers often rely on compiler hint notations to optimize code. However, there is no clear specification for these notations, and the syntax and semantics of these notations vary across different tools. This makes it difficult for developers to understand and use these notations properly. This repository aims to provide a clear and concise specification for them and to help developers understand and use these notations properly.

## Compatibility

This repo also maintains compatibility tables for these notations.

- [`#__PURE__` Notation Compatibility Table](./pure-notation-compatibility.md)
- [`#__NO_SIDE_EFFECTS__` Notation Compatibility Table](./no-side-effects-notation-compatibility.md)
