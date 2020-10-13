import { addStyleMarkToPropMarks } from './add-style-mark-to-mark-props';
import {
  DEFAULT_COLOR_STATUS,
  // LINK_COLOR_STATUS,
  // ACTICE_COLOR_STATUS,
  // VISITED_COLOR_STATUS,
  HOVER_COLOR_STATUS,
} from '../constant/index';

export const transformToCss = (
  propMarks: PropMark[],
  nameValues: NameValue[],
  styleMark: StyleMark,
  prefix: string,
): string => nameValues.reduce((
  result,
  nameValue,
) => {
  let pMarks:PropMark[] = propMarks;
  if (styleMark)pMarks = addStyleMarkToPropMarks(styleMark, pMarks);
  const [name, value] = nameValue;
  const colorStatusList:ColorStatusList = [
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
        return `${text}${marks.map((mark) => `[${prefix ? `${prefix}-` : ''}${mark}-${name}${!isDefault ? `-${status}` : ''}]${!isDefault ? `:${status}` : ''}`).join(',')}{${prop}:${value}${!isDefault ? ' !important' : ''};}`;
      },
      '',
    );
  }, '')}`;
}, '');
export default {
  transformToCss,
};
