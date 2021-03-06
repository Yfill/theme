import Base from './base';
import { hexDimming } from '../utils/calc-color';
import { curry } from '../utils/curry';
import { transformToCss, transformToCssVariables } from '../utils/transform-to-css';
import { DARK_MARK, LIGHT_MARK } from '../constant';
import { arrayFilterEmptyItem, arrayIncludes } from '../utils/array';
import type {
  StyleInterface, PropMark, ValueName, Options,
} from './base';
import type { NameMap } from '../index';

export default class Shadow extends Base implements StyleInterface {
  shadowBoxValueNames: ValueName[]

  constructor(opt: Options) {
    super(opt);
    const getColor = (): string => {
      if (arrayIncludes([DARK_MARK, LIGHT_MARK], this.mark)) return '#000000';
      return hexDimming(opt.color, -0.16);
    };
    const cc = curry(
      (proportion: number) => hexDimming(
        getColor(),
        proportion,
        true,
      ),
    );
    const nameMap: NameMap = opt.nameMapGroup[1] || {};
    this.shadowBoxValueNames = [
      `0 1px 2px -2px ${cc(1 - 0.16)},0 3px 6px 0 ${cc(1 - 0.12)},0 5px 12px 4px ${cc(1 - 0.09)}`,
      `0 3px 6px -4px ${cc(1 - 0.12)},0 6px 16px 0 ${cc(1 - 0.08)},0 9px 28px 8px ${cc(1 - 0.05)}`,
      `0 6px 16px -8px ${cc(1 - 0.08)},0 9px 28px 0 ${cc(1 - 0.05)},0 12px 48px 16px ${cc(1 - 0.03)}`,
    ].map((value, index): ValueName => [value, arrayFilterEmptyItem([`${index}`, nameMap[index]]) as string[]]);
  }

  static shadowPropMarks: PropMark[] = [
    ['box-shadow', ['box-shadow']],
  ]

  exportStyle(): string {
    return transformToCss(
      Shadow.shadowPropMarks,
      this.shadowBoxValueNames,
      this.mark,
      this.prefix,
    );
  }

  exportCssVariables(): string {
    return transformToCssVariables(
      Shadow.shadowPropMarks,
      this.shadowBoxValueNames,
      this.mark,
      this.prefix,
    );
  }
}
