# [Theme](https://yfill.cn/theme) &middot; [![GitHub license][mit]][mit-url] [![NPM Package][npm]][npm-url] [![Build Size][build-size]][build-size-url]

An html theme.

## Install

using npm:
```sh
npm install @yfill-series/theme --save
```
or using yarn:
```sh
yarn add @yfill-series/theme
```

## Usage

* Import resources and use the run method to get started.

  ```js
  import Theme from "@yfill-series/theme";
  Theme.run();
  ```

  ```html
  <script src="https://unpkg.com/@yfill-series/theme"></script>
  <script>
    Theme.run();
  </script>
  ```

* Set the theme attribute on the tag.

  ```
  background-color-[?main]-[-10-10]-[?a]-[?hover]
  font-color-[?main]-[-10-10]-[?a]-[?hover]
  border-color-[?main]-[-10-10]-[?a]-[?hover]
  box-shadow-[?main]-[0-2]-[?hover]
  font-size-[12-52]-[?hover]
  ```

## Code example

```html
<div
  background-color-0
  font-color-0
  font-color-main-0-a-hover
  font-size-18-hover
>
  <style>
    .item {
      line-height: 40px;
      border-width: 0;
      border-style: solid;
      transition: all 0.2s;
      padding-left: 10px;
      border-radius: 6px;
    }
  </style>
  <div
    class="item"
    background-color-1-hover
    border-color-4-a
    box-shadow-2
    box-shadow-main-0-hover
    border-color-1-hover
  >
    Content
  </div>
</div>
<div class="item" font-size-12>font12</div>
<div class="item" font-size-52>font52</div>
```
[mit]:https://img.shields.io/badge/license-MIT-blue.svg
[mit-url]:https://github.com/Yfill/theme/blob/main/LICENSE
[npm]: https://img.shields.io/npm/v/@yfill-series/theme.svg
[npm-url]: https://www.npmjs.com/package/@yfill-series/theme
[build-size]: https://badgen.net/bundlephobia/minzip/@yfill-series/theme
[build-size-url]: https://bundlephobia.com/result?p=@yfill-series/theme