import { transformToCss, transformToCssVariables } from '../utils/transform-to-css';
import { LIGHT_MARK, DARK_MARK } from '../constant/index';
import { arrayFilterEmptyItem, arrayIncludes } from '../utils/array';
import { hexDarken, hexBrighten } from '../utils/calc-color';
import Base from './base';
import type {
  StyleInterface, PropMark, ValueName, Options,
} from './base';
import type { NameMap, StyleMark } from '../index';

export default class Font extends Base implements StyleInterface {
  static colorPropMarks: PropMark[] = [
    ['color', ['font-color']],
  ]

  static sizePropMarks: PropMark[] = [
    ['font-size', ['font-size']],
  ]

  fontSizeValueNames: ValueName[]

  color: string

  placeholderColor: string

  constructor(
    opt: Options,
    minFontSize: number = 12,
    maxFontSize: number = 52,
    placeholderColor?: string,
  ) {
    super(opt);
    const rootSize = parseInt(window.getComputedStyle(document.documentElement).fontSize, 10);
    const minFS = Math.max(12, minFontSize);
    const maxFS = Math.max(Math.max(12, maxFontSize), minFS);
    const nameMap: NameMap = opt.nameMapGroup[1] || {};
    this.fontSizeValueNames = Array.apply(
      null,
      Array(maxFS - minFS + 1),
    ).map(() => minFS)
      .map((num, index) => num + index)
      .map((size): ValueName => [`${size / rootSize}rem`, arrayFilterEmptyItem([`${size}`, nameMap[size]]) as string[]]);
    this.color = opt.color;
    this.placeholderColor = placeholderColor || '';
  }

  getPlaceholderStyle(): string {
    return arrayIncludes([LIGHT_MARK, DARK_MARK], this.mark)
      ? ['input', 'textarea'].reduce(
        (result, tag) => result + [
          '::placeholder',
          '::-webkit-input-placeholder',
          '::-moz-placeholder',
          ':-moz-placeholder',
          ':-ms-input-placeholder'].reduce(
          (style, pseudoClass) => `${style}
              ${tag}${pseudoClass}{
                color:${this.placeholderColor
              || (
                this.mark === DARK_MARK
                  ? hexDarken(this.color, 0.6)
                  : hexBrighten(this.color, 0.6)
              )} !important;
              }
            `,
          '',
        ),
        '',
      ).replace(/\s/g, '')
      : '';
  }

  exportStyle(): string {
    return (arrayIncludes([LIGHT_MARK, DARK_MARK], this.mark)
      ? transformToCss(
        Font.sizePropMarks,
        this.fontSizeValueNames,
        this.mark,
        this.prefix,
      ) + this.getPlaceholderStyle()
      : '')
      + transformToCss(
        Font.colorPropMarks,
        this.colorValueNames,
        this.mark,
        this.prefix,
      );
  }

  exportCssVariables(): string {
    return transformToCssVariables(
      Font.colorPropMarks,
      this.colorValueNames,
      this.mark,
      this.prefix,
    );
  }
}
