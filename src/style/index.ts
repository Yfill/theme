import Background from './background';
import Border from './border';
import Font from './font';
import Shadow from './shadow';
import { calcBackgroundColor, calcBorderColor, calcFontColor } from '../utils/calc-color';
import { createStyleItem } from '../utils/craete-style-item';
import { curry } from '../utils/curry';

const createId = (
  mark:StyleMark,
  name:string,
) => (
  mark
    ? `theme-${name}-${mark}`
    : `theme-${name}`
);
export const createStyle = (
  {
    color,
    backgroundColor,
    borderColor,
    fontColor,
    backgroundColorGroup,
    borderColorGroup,
    fontColorGroup,
    mark,
  }: StyleOptions,
  commonThemeOpt:CommonThemeOpt,
): Style => {
  const commonOpts = {
    maxLevel: commonThemeOpt.maxLevel,
    prefix: commonThemeOpt.prefix,
    mark,
  };
  const createMarkId = curry(createId, mark);
  const styleItems = [
    createStyleItem(
      new Background({
        ...commonOpts,
        color: backgroundColor || calcBackgroundColor(color, mark),
        colorGroup: backgroundColorGroup,
      }),
      createMarkId('background'),
    ),
    createStyleItem(
      new Border({
        ...commonOpts,
        color: borderColor || calcBorderColor(color, mark),
        colorGroup: borderColorGroup,
      }),
      createMarkId('border'),
    ),
    createStyleItem(
      new Font({
        ...commonOpts,
        color: fontColor || calcFontColor(color, mark),
        colorGroup: fontColorGroup,
      }, commonThemeOpt.minFontSize, commonThemeOpt.maxFontSize),
      createMarkId('font'),
    ),
    createStyleItem(
      new Shadow({
        ...commonOpts,
        color,
      }),
      createMarkId('shadow'),
    ),
  ];
  return {
    mount() {
      styleItems.forEach((styleItem) => styleItem.init());
    },
    umount() {
      styleItems.forEach((styleItem) => styleItem.destroy());
    },
  };
};
export default {
  createStyle,
};
