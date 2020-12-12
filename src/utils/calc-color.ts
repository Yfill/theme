import type { ColorGroup, StyleMark } from '../index';
import { DARK_MARK, LIGHT_MARK } from '../constant';
import { arrayIncludes } from './array';

const checkHexColor = (color: string) => {
  if (!color) throw new TypeError('The color value cannot be empty');
  if (!/^#([\da-fA-F]{6}|[\da-fA-F]{3})$/.test(color)) throw new TypeError(`The color value(${color}) needs to be a hex value`);
};

const hex2Rgb = (color: string): number[] => {
  checkHexColor(color);
  const value = color.replace('#', '');
  return (value.length === 3
    ? value.split('').map((item) => item + item)
    : (value.match(/../g) || []))
    .map((item) => parseInt(item, 16));
};

const rgbItemBound = (item: number): number => Math.max(0, Math.min(255, item));

const rgbToHex = (r: number, g: number, b: number): string => {
  const reg = /^\d{1,3}$/;
  if (!reg.test(`${r}`) || !reg.test(`${g}`) || !reg.test(`${b}`)) throw new TypeError('rgb error');
  const hexs = [r.toString(16), g.toString(16), b.toString(16)];
  return `#${hexs.map((item) => (item.length === 1 ? `0${item}` : item)).join('')}`;
};

const calcLevelNumRgbColor = (
  color: string,
  levelNum: number,
  isBrighten: boolean,
): number[] => hex2Rgb(color).map((item) => rgbItemBound(isBrighten
  ? Math.round((255 - item) * levelNum + item)
  : Math.round(item * (1 - levelNum))));

export const hexDimming = (
  color: string,
  proportion: number,
  hasTransparent: boolean = false,
): string => {
  checkHexColor(color);
  const proportionNum = Math.max(0, Math.min(1, Math.abs(proportion)));
  const isBrighten = proportion >= 0;
  const rgbc = calcLevelNumRgbColor(color, proportionNum, isBrighten);
  if (!hasTransparent) return rgbToHex(rgbc[0], rgbc[1], rgbc[2]);
  return `rgba(${hex2Rgb(color).join(',')},${(1 - proportionNum).toFixed(3)})`;
};

export const hexDarken = (
  color: string,
  proportion: number,
  hasTransparent: boolean = false,
): string => hexDimming(color, -proportion, hasTransparent);

export const hexBrighten = (
  color: string,
  proportion: number,
  hasTransparent: boolean = false,
): string => hexDimming(color, proportion, hasTransparent);

export const rgbDarken = (
  r: number,
  g: number,
  b: number,
  proportion: number,
): string => hexDarken(
  rgbToHex(r, g, b),
  proportion,
);

export const rgbBrighten = (
  r: number,
  g: number,
  b: number,
  proportion: number,
): string => hexBrighten(
  rgbToHex(r, g, b),
  proportion,
);

export const calcColor = (
  color: string,
  colorGroup: ColorGroup | undefined | null,
  mark: StyleMark,
  maxLevel: number,
  level: number,
  hasTransparent: boolean = false,
): string => {
  const groupLevelColor = (colorGroup || [])[level];
  if (groupLevelColor) return groupLevelColor;
  if (mark === DARK_MARK) return hexBrighten(color, level / maxLevel, hasTransparent);
  if (mark === LIGHT_MARK) return hexDarken(color, level / maxLevel, hasTransparent);
  return hexBrighten(color, level / maxLevel, hasTransparent);
};
// eslint-disable-next-line no-unused-vars
export const calcBackgroundColor = (color: string, mark: StyleMark): string => color;

export const calcBorderColor = (color: string, mark: StyleMark): string => {
  if (!arrayIncludes([LIGHT_MARK, DARK_MARK], mark)) return color;
  if (mark === DARK_MARK) return hexBrighten(color, 0.09);
  return hexDarken(color, 0.09);
};

export const calcFontColor = (color: string, mark: StyleMark): string => {
  if (!arrayIncludes([LIGHT_MARK, DARK_MARK], mark)) return color;
  if (mark === DARK_MARK) return hexBrighten(color, 0.78);
  return hexDarken(color, 0.78);
};
