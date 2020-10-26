import { transformToCss } from '../utils/transform-to-css';
import { LIGHT_MARK, DARK_MARK } from '../constant/index';
import { arrayFilterEmptyItem, arrayIncludes } from '../utils/array';
import Base from './base';

export default class Font extends Base implements StyleInterface {
  fontSizeValueNames: ValueName[]

  static colorPropMarks: PropMark[] = [
    ['color', ['font-color']],
  ]

  static sizePropMarks: PropMark[] = [
    ['font-size', ['font-size']],
  ]

  constructor(opt: Options, minFontSize: number = 12, maxFontSize: number = 52) {
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
      .map((size): ValueName => [`${size / rootSize}rem`, arrayFilterEmptyItem([`${size}`, nameMap[size]])]);
  }

  exportStyle(): string {
    return (arrayIncludes([LIGHT_MARK, DARK_MARK], this.mark)
      ? transformToCss(
        Font.sizePropMarks,
        this.fontSizeValueNames,
        this.mark,
        this.prefix,
      )
      : '')
      + transformToCss(
        Font.colorPropMarks,
        this.colorValueNames,
        this.mark,
        this.prefix,
      );
  }
}
