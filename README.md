# 主题

## 快速上手

### 一、引入theme，执行run

```shell
yarn add @yfill-series/theme
npm install @yfill-series/theme --save
```

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

### 二、在 tag 上设置 theme 属性

    background-color-[?main]-[-10-10]-[?a]-[?hover]
    font-color-[?main]-[-10-10]-[?a]-[?hover]
    border-color-[?main]-[-10-10]-[?a]-[?hover]
    box-shadow-[?main]-[0-2]-[?hover]
    font-size-[12-52]-[?hover]

### 三、代码示例

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
    内容
  </div>
</div>
<div class="item" font-size-12>字体12</div>
<div class="item" font-size-52>字体52</div>
```