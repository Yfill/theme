import { LIGHT_MODE } from '../constant';
import { calcBackgroundColor, calcBorderColor, calcFontColor } from '../utils/calc-color';
import type { StyleOptions } from '../index';

const color = '#ffffff';

export const lightColor: StyleOptions = {
  color,
  mark: LIGHT_MODE,
  backgroundColor: calcBackgroundColor(color, LIGHT_MODE),
  borderColor: calcBorderColor(color, LIGHT_MODE),
  fontColor: calcFontColor(color, LIGHT_MODE),
};
export default lightColor;
