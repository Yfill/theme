import { Theme } from './theme';
export declare type Style = {
    mount: Function;
    umount: Function;
};
export declare type CommonThemeOpt = {
    prefix: string;
    minFontSize?: number;
    maxFontSize?: number;
    maxLevel?: number;
};
export declare type ColorGroup = string[];
export declare type StyleMark = string;
export declare type NameMap = {
    [index: string]: string;
};
export declare type StyleOptions = {
    mark: StyleMark;
    color: string;
    backgroundColor?: string;
    borderColor?: string;
    fontColor?: string;
    backgroundColorGroup?: ColorGroup;
    backgroundColorNameMap?: NameMap;
    borderColorGroup?: ColorGroup;
    borderColorNameMap?: NameMap;
    fontColorGroup?: ColorGroup;
    fontColorNameMap?: NameMap;
    fontSizeNameMap?: NameMap;
    boxShadowNameMap?: NameMap;
};
export default Theme;
