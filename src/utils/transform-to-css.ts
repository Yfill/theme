import { addStyleMarkToPropMarks } from './add-style-mark-to-mark-props';
import type { StyleMark } from '../index';
import type { PropMark, ValueName } from '../style/base';

export type ColorStatus = 'default' | 'link' | 'visited' | 'hover' | 'active' | 'focus'

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
    'default',
    'hover',
  ];
  return `${result}${pMarks.reduce((
    str,
    propMark,
  ) => {
    const [prop, marks] = propMark;
    return str + colorStatusList.reduce(
      (text, status) => {
        const isDefault = status === 'default';
        return `${text}${names.map((name) => marks.map((mark) => `[${prefix ? `${prefix}-` : ''}${mark}-${name}${!isDefault ? `-${status}` : ''}]${!isDefault ? `:${status}` : ''}`).join(',')).join(',')}{${prop}:${value}${!isDefault ? ' !important' : ''};}`;
      },
      '',
    );
  }, '')}`;
}, '');
export const transformToCssVariables = (
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
  return `${result}${pMarks.reduce((
    str,
    propMark,
  ) => {
    const marks = propMark[1];
    return str + names.reduce((text, name) => text + marks.map((mark) => `--${prefix ? `${prefix}-` : ''}${mark}-${name}:${value};`).join(''), '');
  }, '')}`;
}, '');

export default {
  transformToCss,
  transformToCssVariables,
};
