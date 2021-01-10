import { DARK_MODE } from '../constant';
import { calcBackgroundColor, calcBorderColor, calcFontColor } from '../utils/calc-color';
import type { StyleOptions } from '../index';

const color = '#121212';

export const darkColor: StyleOptions = {
  color,
  mark: DARK_MODE,
  backgroundColor: calcBackgroundColor(color, DARK_MODE),
  borderColor: calcBorderColor(color, DARK_MODE),
  fontColor: calcFontColor(color, DARK_MODE),
  backgroundColorGroup: ['#121212', '#1d1d1d', '#212121', '#242424', '#272727', '#2c2c2c', '#2d2d2d', '#333333', '#343434', '#373737'],
};
export default darkColor;
