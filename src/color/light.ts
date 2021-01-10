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
  backgroundColorGroup: ['#ffffff', '#f2f2f2', '#ededed', '#ebebeb', '#e8e8e8', '#e3e3e3', '#e0e0e0', '#dbdbdb', '#d9d9d9', '#d6d6d6'],
};
export default lightColor;
