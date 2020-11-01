import { addStyleMarkToPropMarks } from './add-style-mark-to-mark-props';
import {
  DEFAULT_COLOR_STATUS,
  // LINK_COLOR_STATUS,
  // ACTICE_COLOR_STATUS,
  // VISITED_COLOR_STATUS,
  HOVER_COLOR_STATUS,
} from '../constant/index';
import type { StyleMark } from '../index';
import type { PropMark, ValueName } from '../style/base';

export type ColorStatus = 'default' | 'link' | 'visited' | 'hover' | 'active'
export type ColorStatusList = ColorStatus[]
export const transformToCss = (
  propMarks: PropMark[],
  valueNamesGroup: ValueName[],
  styleMark: StyleMark,
  prefix: string,
): string => valueNamesGroup.reduce((
  result,
  valueName,
) => {
  let pMarks: PropMark[] = propMarks;
  if (styleMark) pMarks = addStyleMarkToPropMarks(styleMark, pMarks);
  const [value, names] = valueName;
  const colorStatusList: ColorStatusList = [
    DEFAULT_COLOR_STATUS,
    // LINK_COLOR_STATUS,
    // ACTICE_COLOR_STATUS,
    // VISITED_COLOR_STATUS,
    HOVER_COLOR_STATUS,
  ];
  return `${result}${pMarks.reduce((
    str,
    propMark,
  ) => {
    const [prop, marks] = propMark;
    return str + colorStatusList.reduce(
      (text, status) => {
        const isDefault = status === DEFAULT_COLOR_STATUS;
        return `${text}${names.map((name) => marks.map((mark) => `[${prefix ? `${prefix}-` : ''}${mark}-${name}${!isDefault ? `-${status}` : ''}]${!isDefault ? `:${status}` : ''}`).join(',')).join(',')}{${prop}:${value}${!isDefault ? ' !important' : ''};}`;
      },
      '',
    );
  }, '')}`;
}, '');
export default {
  transformToCss,
};
