import { curry } from '../utils/curry';
import { calcColor } from '../utils/calc-color';
import { transformToNameValues } from '../utils/transform-to-name-values';

export default class Base {
  mark: StyleMark

  prefix: string

  colorTupleList: ColorTupleList

  static getValueNames = (
    cc: (index: number, hasTransparent: boolean) => string,
    maxLevel: number = 10,
    // eslint-disable-next-line prefer-spread
  ) => Array.apply(null, Array(maxLevel + 1))
    .reduce((result: ValueName[], item, index) => result
      .concat([false, true]
        .map((hasTransparent) => [
          cc(index, hasTransparent),
          [`${index}${hasTransparent ? '-a' : ''}`],
        ]))
      .concat(index === 0 ? [] : [false, true]
        .map((hasTransparent) => [
          cc(-index, hasTransparent),
          [`${-index}${hasTransparent ? '-a' : ''}`],
        ])), [])

  constructor(opt: Options) {
    const cc = curry(calcColor, opt.color, opt.colorGroup, opt.mark, opt.maxLevel);
    this.mark = opt.mark;
    this.prefix = opt.prefix;
    this.colorTupleList = transformToNameValues(Base.getValueNames(cc, opt.maxLevel));
  }
}
