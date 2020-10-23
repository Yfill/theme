import Background from './background';
import Border from './border';
import Font from './font';
import Shadow from './shadow';
import { calcBackgroundColor, calcBorderColor, calcFontColor } from '../utils/calc-color';

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
    }),
    new Border({
      ...commonOpts,
      color: borderColor || calcBorderColor(color, mark),
      colorGroup: borderColorGroup,
    }),
    new Font({
      ...commonOpts,
      color: fontColor || calcFontColor(color, mark),
      colorGroup: fontColorGroup,
    }, commonThemeOpt.minFontSize, commonThemeOpt.maxFontSize),
    new Shadow({
      ...commonOpts,
      color,
    }),
  ];
  return {
    mount() {
      const themeStyleWrap = document.head;
      if (themeStyleWrap.querySelector(`[theme-item="${mark}"]`)) return;
      const target = document.createElement('style');
      target.innerText = styleItems.map((styleItem) => styleItem.exportStyle()).join('');
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
