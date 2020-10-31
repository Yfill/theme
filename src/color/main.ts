import { MAIN_MARK } from '../constant/index';
import { calcBackgroundColor, calcBorderColor, calcFontColor } from '../utils/calc-color';
import type { StyleOptions } from '../index';

const color = '#1890ff';
export const mainColor:StyleOptions = {
  color,
  mark: MAIN_MARK,
  backgroundColor: calcBackgroundColor(color, MAIN_MARK),
  borderColor: calcBorderColor(color, MAIN_MARK),
  fontColor: calcFontColor(color, MAIN_MARK),
};
export default mainColor;
