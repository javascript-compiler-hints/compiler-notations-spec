# `#__NO_SIDE_EFFECTS__` Notation Compatibility Table

The following table lists the compatibility of the [`#__NO_SIDE_EFFECTS__` notation](./no-side-effects-notation-spec.md) with popular JavaScript bundlers and minifiers. This table is not exhaustive.

| Tool | Documentation | Note |
| ---- | ----------------- | ------------- |
| [Rollup](https://rollupjs.org/) | https://rollupjs.org/configuration-options/#no-side-effects, https://github.com/rollup/rollup/pull/5024 |
| [esbuild](https://esbuild.github.io/) | https://github.com/evanw/esbuild/issues/3149 | [esbuild only preserves the notation but does not have tree-shaking effect](https://github.com/evanw/esbuild/issues/3149#issuecomment-1584954956) | 
| [swc](https://swc.rs/) | https://github.com/swc-project/swc/pull/7532 | | 
| [Rolldown](https://rolldown.rs/) | https://rolldown.rs/options/treeshake#treeshake-annotations |
| [Oxc Minifier](https://oxc.rs/docs/guide/usage/minifier) | https://oxc.rs/docs/guide/usage/minifier/dead-code-elimination.html#no-side-effects-no-side-effects |
