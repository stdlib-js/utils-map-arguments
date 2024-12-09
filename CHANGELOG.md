# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2024-12-09)

<section class="features">

### Features

-   [`b74a08a`](https://github.com/stdlib-js/stdlib/commit/b74a08ae1dfc859ac8b9704af27e3c3399ad2da5) - improve type declarations for `utils/map-arguments` [(#2050)](https://github.com/stdlib-js/stdlib/pull/2050)

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`b74a08a`](https://github.com/stdlib-js/stdlib/commit/b74a08ae1dfc859ac8b9704af27e3c3399ad2da5): function signature and return type now more strictly typed

    -   The mapArguments function now uses generic types instead of 'Function', and its
        return type depends on thisArg presence. 
        Users should review and update their usage of mapArguments, particularly:
        -   Ensure provided functions match the new, stricter type requirements
        -   Update any type assertions or checks where mapArguments is used
        -   Pay special attention to contexts where this binding is significant

</section>

<!-- /.breaking-changes -->

<section class="issues">

### Closed Issues

This release closes the following issue:

[#1087](https://github.com/stdlib-js/stdlib/issues/1087)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`b74a08a`](https://github.com/stdlib-js/stdlib/commit/b74a08ae1dfc859ac8b9704af27e3c3399ad2da5) - **feat:** improve type declarations for `utils/map-arguments` [(#2050)](https://github.com/stdlib-js/stdlib/pull/2050) _(by Prajwal Kulkarni, Philipp Burckhardt, Prajwal Kulkarni)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Philipp Burckhardt
-   Prajwal Kulkarni

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.2">

## 0.2.2 (2024-07-27)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-21)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

<section class="commits">

### Commits

<details>

-   [`cacca61`](https://github.com/stdlib-js/stdlib/commit/cacca61bc884c5c1805716236733cf378d0ce955) - **docs:** update links _(by Athan Reines)_
-   [`453dd85`](https://github.com/stdlib-js/stdlib/commit/453dd85b5dd186d2b4d458256fe84906e1503fe2) - **build:** remove tslint directives _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.1">

## 0.1.1 (2023-10-03)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-22)

<section class="features">

### Features

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`ace728f`](https://github.com/stdlib-js/stdlib/commit/ace728f330033182c28199dc9e13d75eda18cfe0) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

