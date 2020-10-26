import { curry } from '../utils/curry';
import { calcColor } from '../utils/calc-color';
import { arrayFilterEmptyItem } from '../utils/array';

const defaultMaxLevel = 10;
export default class Base {
  mark: StyleMark

  prefix: string

  colorValueNames: ValueName[]

  static getValueNames = (
    cc: (index: number, hasTransparent: boolean) => string,
    maxLevel: number,
    nameMap: NameMap = {},
  ) => Array.apply(null, Array(maxLevel + 1))
    .reduce((result: ValueName[], item, index) => result
      .concat([false, true]
        .map((hasTransparent) => [
          cc(index, hasTransparent),
          arrayFilterEmptyItem([`${index}${hasTransparent ? '-a' : ''}`, nameMap[index]]),
        ]))
      .concat(index === 0 ? [] : [false, true]
        .map((hasTransparent) => [
          cc(-index, hasTransparent),
          arrayFilterEmptyItem([`${-index}${hasTransparent ? '-a' : ''}`, nameMap[-index]]),
        ])), [])

  constructor(opt: Options) {
    const maxLevel = Math.max(
      opt.maxLevel ?? defaultMaxLevel,
      (opt.colorGroup?.length ?? 0) - 1,
    );
    const cc = curry(calcColor, opt.color, opt.colorGroup, opt.mark, maxLevel);
    this.mark = opt.mark;
    this.prefix = opt.prefix;
    this.colorValueNames = Base.getValueNames(cc, maxLevel, opt.nameMapGroup[0]);
  }
}
