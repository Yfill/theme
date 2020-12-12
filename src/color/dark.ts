import { DARK_MODE } from '../constant';
import { calcBackgroundColor, calcBorderColor, calcFontColor } from '../utils/calc-color';
import type { StyleOptions } from '../index';

const color = '#191919';

export const darkColor:StyleOptions = {
  color,
  mark: DARK_MODE,
  backgroundColor: calcBackgroundColor(color, DARK_MODE),
  borderColor: calcBorderColor(color, DARK_MODE),
  fontColor: calcFontColor(color, DARK_MODE),
};
export default darkColor;
