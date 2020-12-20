# [Theme](https://yfill.cn/theme)

[![GitHub license][mit]][mit-url]
[![Code Style][code-style]][code-style-url]
[![NPM Package][npm]][npm-url]
[![Monthly Downloads][md]][md-url]
[![Build Size][build-size]][build-size-url]
[![Dependencies Status][dependencies-status]][dependencies-status-url]
[![DevDependencies Status][dev-dependencies-status]][dev-dependencies-status-url]

An ultra-light, universal and concise theme mode.

## Install

using npm:

```sh
npm install @yfill/theme --save
```

or using yarn:

```sh
yarn add @yfill/theme
```

## Usage

- Import resources and use the run method to get started.

  ```js
  import Theme from '@yfill/theme';
  Theme.run();
  ```

  ```html
  <script src="https://unpkg.com/@yfill/theme"></script>
  <script>
    Theme.run();
  </script>
  ```

- Set the theme attribute on the tag.

  ```
  background-color-[?main]-[-10-10]-[?a]-[?hover]
  font-color-[?main]-[-10-10]-[?a]-[?hover]
  border-color-[?main]-[-10-10]-[?a]-[?hover]
  box-shadow-[?main]-[0-2]-[?hover]
  font-size-[12-52]-[?hover]
  ```

- It can also be used by enabling css variables.

  ```js
  Theme.run({
    enableCssVariables: true,
  });
  ```

  ```css
  .item {
    background-color: var(--background-color-[?main]-[-10-10]-[?a]);
    color: var(--font-color-[?main]-[-10-10]-[?a]);
    border-color: var(--border-color-[?main]-[-10-10]-[?a]);
    box-shadow: var(--box-shadow-[?main]-[0-2]);
    font-size: var(--font-size-[12-52]);
  }
  .item:hover {
    background-color: var(--background-color-[?main]-[-10-10]-[?a]);
    color: var(--font-color-[?main]-[-10-10]-[?a]);
    border-color: var(--border-color-[?main]-[-10-10]-[?a]);
    box-shadow: var(--box-shadow-[?main]-[0-2]);
    font-size: var(--font-size-[12-52]);
  }
  ```

## Code example

```html
<style>
  .variable {
    background-color: var(--background-color-1);
  }

  .variable:hover {
    color: var(--font-color-main-0);
  }
</style>
<div
  class="item variable"
  font-size-12
  box-shadow-0
  border-color--4-a
  font-size-52-hover
  background-color-2-hover
  box-shadow-main-0-hover
  border-color-main-1-hover
>
  content
</div>
<div
  class="item"
  font-size-12
  background-color-1
  box-shadow-0
  border-color--4-a
>
  font12
</div>
<div
  class="item"
  font-size-52
  font-color-main-0
  background-color-2
  box-shadow-main-0
  border-color-main-1
>
  font52
</div>
```

[mit]: https://img.shields.io/badge/license-MIT-blue.svg
[mit-url]: https://github.com/Yfill/theme/blob/main/LICENSE
[code-style]: https://img.shields.io/badge/code_style-airbnb-brightgreen
[code-style-url]: https://www.npmjs.com/package/eslint-config-airbnb
[md]: https://badgen.net/npm/dm/@yfill/theme
[md-url]: https://npmcharts.com/compare/@yfill/theme?minimal=true
[npm]: https://img.shields.io/npm/v/@yfill/theme.svg
[npm-url]: https://www.npmjs.com/package/@yfill/theme
[build-size]: https://badgen.net/bundlephobia/minzip/@yfill/theme
[build-size-url]: https://bundlephobia.com/result?p=@yfill/theme
[dependencies-status]: https://david-dm.org/Yfill/theme/status.svg
[dependencies-status-url]: https://david-dm.org/Yfill/theme
[dev-dependencies-status]: https://david-dm.org/Yfill/theme/dev-status.svg
[dev-dependencies-status-url]: https://david-dm.org/Yfill/theme?type=dev
