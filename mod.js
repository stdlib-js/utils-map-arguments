// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,c=o.__lookupGetter__,l=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,e){var n,a,p,y;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(c.call(t,r)||l.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),p="get"in e,y="set"in e,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,r,e.get),y&&f&&f.call(t,r,e.set),t};var a=e;function p(t,r,e){a(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function y(t){return"boolean"==typeof t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;var w="function"==typeof Symbol?Symbol.toStringTag:"";var _=b()?function(t){var r,e,n,o,u;if(null==t)return v.call(t);e=t[w],u=w,r=null!=(o=t)&&d.call(o,u);try{t[w]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[w]=e:delete t[w],n}:function(t){return v.call(t)},g=Boolean.prototype.toString;var j=b();function m(t){return"object"==typeof t&&(t instanceof Boolean||(j?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===_(t)))}function h(t){return y(t)||m(t)}function S(){return new Function("return this;")()}p(h,"isPrimitive",y),p(h,"isObject",m);var E="object"==typeof self?self:null,O="object"==typeof window?window:null,T="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},A="object"==typeof T?T:null;var B=function(t){if(arguments.length){if(!y(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return S()}if(E)return E;if(O)return O;if(A)return A;throw new Error("unexpected error. Unable to resolve global object.")}(),P=B.document&&B.document.childNodes,k=Int8Array;function x(){return/^\s*function\s*([^(]*)/i}var C=/^\s*function\s*([^(]*)/i;p(x,"REGEXP",C);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===_(t)};function G(t){return null!==t&&"object"==typeof t}function L(t){var r,e,n,o;if(("Object"===(e=_(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=C.exec(n.toString()))return r[1]}return G(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}p(G,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!V(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(G));var F="function"==typeof t||"object"==typeof k||"function"==typeof P?function(t){return L(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?L(t).toLowerCase():r};function I(t){return"function"===F(t)}function M(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}function R(t,r,e){if(!I(t))throw new TypeError(M("0kT3p",t));if(!I(r))throw new TypeError(M("0kT2S",r));return function(){var n,o;for(n=[],o=0;o<arguments.length;o++)n.push(r(arguments[o],o));return t.apply(e,n)}}export{R as default};
//# sourceMappingURL=mod.js.map
