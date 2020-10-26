# [Theme](https://yfill.cn/theme) &middot; [![GitHub license][mit]][mit-url] [![NPM Package][npm]][npm-url] [![Build Size][build-size]][build-size-url]

An html theme.

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

* Import resources and use the run method to get started.

  ```js
  import Theme from "@yfill/theme";
  Theme.run();
  ```

  ```html
  <script src="https://unpkg.com/@yfill/theme"></script>
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
    class="item"
    font-size-12
    background-color-1
    box-shadow-2
    border-color--4-a
    font-size-52-hover
    font-color-main-0-hover
    background-color-2-hover
    box-shadow-main-0-hover
    border-color-main-1-hover>
    Content
</div>
<div 
    class="item" 
    font-size-12
    background-color-1
    box-shadow-2
    border-color--4-a>
    font12
</div>
<div 
    class="item" 
    font-size-52
    font-color-main-0
    background-color-2
    box-shadow-main-0
    border-color-main-1>
    font52
</div>
```
[mit]:https://img.shields.io/badge/license-MIT-blue.svg
[mit-url]:https://github.com/Yfill/theme/blob/main/LICENSE
[npm]: https://img.shields.io/npm/v/@yfill/theme.svg
[npm-url]: https://www.npmjs.com/package/@yfill/theme
[build-size]: https://badgen.net/bundlephobia/minzip/@yfill/theme
[build-size-url]: https://bundlephobia.com/result?p=@yfill/theme
