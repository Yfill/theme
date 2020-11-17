import { Theme } from './theme';

export type Style = {
  mount: Function,
  umount: Function
}

export type CommonThemeOpt = {
  prefix: string,
  minFontSize?: number,
  maxFontSize?: number,
  maxLevel?: number,
  enableCssVariables?: boolean
}

export type ColorGroup = string[]

export type StyleMark = string

export type NameMap = { [index: string]: string }

export type StyleOptions = {
  mark: StyleMark,
  color: string,
  placeholderColor?: string,
  backgroundColor?: string,
  borderColor?: string,
  fontColor?: string,
  backgroundColorGroup?: ColorGroup
  backgroundColorNameMap?: NameMap
  borderColorGroup?: ColorGroup
  borderColorNameMap?: NameMap
  fontColorGroup?: ColorGroup
  fontColorNameMap?: NameMap,
  fontSizeNameMap?: NameMap,
  boxShadowNameMap?: NameMap,
  enableCssVariables?: boolean
}

export default Theme;
