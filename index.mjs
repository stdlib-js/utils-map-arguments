// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function r(r,e,s){if(!t(r))throw new TypeError(n("invalid argument. First argument must be a function. Value: `%s`.",r));if(!t(e))throw new TypeError(n("invalid argument. Second argument must be a function. Value: `%s`.",e));return function(){var t,n;for(t=[],n=0;n<arguments.length;n++)t.push(e(arguments[n],n));return r.apply(s,t)}}export{r as default};
//# sourceMappingURL=index.mjs.map
