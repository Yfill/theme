import Background from './background';
import Border from './border';
import Font from './font';
import Shadow from './shadow';
import { calcBackgroundColor, calcBorderColor, calcFontColor } from '../utils/calc-color';
import type { StyleOptions, CommonThemeOpt, Style } from '../index';
import Base from './base';

export const createStyle = (
  {
    color,
    placeholderColor,
    backgroundColor,
    borderColor,
    fontColor,
    backgroundColorGroup,
    backgroundColorNameMap,
    borderColorGroup,
    borderColorNameMap,
    fontColorGroup,
    fontColorNameMap,
    fontSizeNameMap,
    boxShadowNameMap,
    mark,
  }: StyleOptions,
  commonThemeOpt: CommonThemeOpt,
): Style => {
  const commonOpts = {
    maxLevel: commonThemeOpt.maxLevel,
    prefix: commonThemeOpt.prefix,
    mark,
  };
  const styleItems = [
    new Background({
      ...commonOpts,
      color: backgroundColor || calcBackgroundColor(color, mark),
      colorGroup: backgroundColorGroup,
      nameMapGroup: [backgroundColorNameMap],
    }),
    new Border({
      ...commonOpts,
      color: borderColor || calcBorderColor(color, mark),
      colorGroup: borderColorGroup,
      nameMapGroup: [borderColorNameMap],
    }),
    new Font({
      ...commonOpts,
      color: fontColor || calcFontColor(color, mark),
      colorGroup: fontColorGroup,
      nameMapGroup: [fontColorNameMap, fontSizeNameMap],
    },
    commonThemeOpt.minFontSize,
    commonThemeOpt.maxFontSize,
    placeholderColor),
    new Shadow({
      ...commonOpts,
      color,
      nameMapGroup: [undefined, boxShadowNameMap],
    }),
  ];
  return {
    mount() {
      const themeStyleWrap = document.head;
      if (themeStyleWrap.querySelector(`[theme-item="${mark}"]`)) return;
      const target = document.createElement('style');
      target.innerText = styleItems.map((styleItem) => styleItem.exportStyle()).join('')
      + (
        commonThemeOpt.enableCssVariables
          ? `:root{${styleItems.map((styleItem) => styleItem.exportCssVariables()).join('')}}`
          : '');
      target.setAttribute('theme-item', mark);
      themeStyleWrap.appendChild(target);
    },
    umount() {
      const themeStyleWrap = document.head;
      const el = themeStyleWrap.querySelector(`[theme-item="${mark}"]`);
      if (el) themeStyleWrap.removeChild(el);
    },
  };
};
export default {
  createStyle,
};
