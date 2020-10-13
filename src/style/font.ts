import { transformToCss } from '../utils/transform-to-css';
import { transformToNameValues } from '../utils/transform-to-name-values';
import { LIGHT_MARK, DARK_MARK } from '../constant/index';
import { arrayIncludes } from '../utils/array';
import Base from './base';

export default class Font extends Base implements StyleInterface {
  sizeTupleList: SizeTupleList

  static colorPropMarks: PropMark[] =[
    ['color', ['fc', 'font-color']],
  ]

  static sizePropMarks: PropMark[] = [
    ['font-size', ['fs', 'font-size']],
  ]

  constructor(opt: Options, minFontSize:number = 12, maxFontSize:number = 52) {
    super(opt);
    const rootSize = parseInt(window.getComputedStyle(document.documentElement).fontSize, 10);
    const minFS = Math.max(12, minFontSize);
    const maxFS = Math.max(Math.max(12, maxFontSize), minFS);
    // eslint-disable-next-line prefer-spread
    const moreSizeTupleList:ValueName[] = Array.apply(
      null,
      Array(maxFS - minFS + 1),
    ).map(() => minFS)
      .map((num, index) => num + index)
      .map((size):ValueName => [`${size / rootSize}rem`, [`${size}`]]);
    this.sizeTupleList = transformToNameValues(moreSizeTupleList);
  }

  exportStyle(): string {
    return (arrayIncludes([LIGHT_MARK, DARK_MARK], this.mark)
      ? transformToCss(
        Font.sizePropMarks,
        this.sizeTupleList,
        this.mark,
        this.prefix,
      )
      : '')
     + transformToCss(
       Font.colorPropMarks,
       this.colorTupleList,
       this.mark,
       this.prefix,
     );
  }
}
