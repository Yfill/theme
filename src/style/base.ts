import { curry } from '../utils/curry';
import { calcColor } from '../utils/calc-color';
import { transformToNameValues } from '../utils/transform-to-name-values';

const defaultMaxLevel = 10;
export default class Base {
  mark: StyleMark

  prefix: string

  colorTupleList: ColorTupleList

  static getValueNames = (
    cc: (index: number, hasTransparent: boolean) => string,
    maxLevel: number,
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
    const maxLevel = Math.max(
      opt.maxLevel ?? defaultMaxLevel,
      (opt.colorGroup?.length ?? 0) - 1,
    );
    const cc = curry(calcColor, opt.color, opt.colorGroup, opt.mark, maxLevel);
    this.mark = opt.mark;
    this.prefix = opt.prefix;
    this.colorTupleList = transformToNameValues(Base.getValueNames(cc, maxLevel));
  }
}
