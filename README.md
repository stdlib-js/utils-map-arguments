<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# mapArguments

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create a function that applies arguments to a provided function after transforming arguments according to a callback function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
mapArguments = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-map-arguments@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var mapArguments = require( 'path/to/vendor/umd/utils-map-arguments/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-map-arguments@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.mapArguments;
})();
</script>
```

#### mapArguments( fcn, clbk\[, thisArg] )

Returns a `function` that invokes a provided function after transforming arguments according to a callback function.

```javascript
function foo( a, b, c ) {
    return [ a, b, c ];
}

function clbk( v ) {
    return v * 2;
}

var bar = mapArguments( foo, clbk );

var out = bar( 1, 2, 3 );
// returns [ 2, 4, 6 ]
```

The `clbk` function is provided the following arguments:

-   **value**: argument value.
-   **index**: argument index.

To set the `this` context when invoking the input function, provide a `thisArg`.

<!-- eslint-disable no-restricted-syntax -->

```javascript
function clbk( v ) {
    return v * 2;
}

function Foo() {
    this.x = 1;
    this.y = 2;
}

Foo.prototype.scale = function scale( a, b ) {
    return [ this.x*a, this.y*b ];
};

var ctx = {
    'x': 10,
    'y': 20
};

var foo = new Foo();

var bar = mapArguments( foo.scale, clbk, ctx );

var out = bar( 1, 2 );
// returns [ 20, 80 ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-filled-by@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-add@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-filter-arguments@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-map-arguments@umd/browser.js"></script>
<script type="text/javascript">
(function () {

function fill( i ) {
    return i;
}

function scale( v ) {
    return v * 2.0;
}

function factory( i, j ) {
    return predicate;

    function predicate( value, index ) {
        return ( i <= index ) && ( index < j );
    }
}

// Create a data array:
var x = filledarrayBy( 10, 'float64', fill );

// Compute the sum of consecutive squared elements...
var f;
var i;
for ( i = 0; i < x.length-1; i++ ) {
    f = filterArguments( mapArguments( add, scale ), factory( i, i+2 ) );
    console.log( 'sum(x_%d^2, x_%d^2) = %d', i, i+1, f.apply( null, x ) );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-filter-arguments`][@stdlib/utils/filter-arguments]</span><span class="delimiter">: </span><span class="description">create a function that invokes a provided function according to a predicate function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-map-arguments.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-map-arguments

[test-image]: https://github.com/stdlib-js/utils-map-arguments/actions/workflows/test.yml/badge.svg?branch=v0.3.0
[test-url]: https://github.com/stdlib-js/utils-map-arguments/actions/workflows/test.yml?query=branch:v0.3.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-map-arguments/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-map-arguments?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-map-arguments.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-map-arguments/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-map-arguments/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-map-arguments/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-map-arguments/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-map-arguments/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-map-arguments/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-map-arguments/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-map-arguments/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-map-arguments/main/LICENSE

<!-- <related-links> -->

[@stdlib/utils/filter-arguments]: https://github.com/stdlib-js/utils-filter-arguments/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
