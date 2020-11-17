import { LIGHT_MARK, DARK_MARK } from '../constant/index';
import { arrayIncludes } from './array';
import type { StyleMark } from '../index';
import type { PropMark } from '../style/base';

export const addStyleMarkToPropMarks = (
  styleMark: StyleMark,
  propMarks: PropMark[],
): PropMark[] => {
  if (
    !styleMark
    || arrayIncludes([LIGHT_MARK, DARK_MARK], styleMark)
  ) return propMarks;
  return propMarks.map((propMark) => {
    const [prop, marks] = propMark;
    return [prop, marks.map((mark) => `${mark}-${styleMark}`)];
  });
};

export default {
  addStyleMarkToPropMarks,
};
