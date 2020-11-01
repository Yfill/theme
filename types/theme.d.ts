import EventHub from '@yfill/event-hub';
import type { Style, CommonThemeOpt, StyleMark, StyleOptions } from './index';
import { Extentions } from './extentions';
export declare type ThemeMode = 'light' | 'dark';
export declare type ThemeStatus = 'mounted' | 'unmounted' | 'notMounted';
export declare type Store = {
    lightStyleInstance: Style | null;
    darkStyleInstance: Style | null;
    mainStyleInstance: Style | null;
    otherStyleInstanceMap: {
        [prop: string]: Style;
    };
    commonThemeOpt: CommonThemeOpt;
    initialLightOpt: StyleOptions | null;
    initialDarkOpt: StyleOptions | null;
    initialMainOpt: StyleOptions | null;
};
export declare type ThemeOpt = {
    lightOpt?: StyleOptions;
    darkOpt?: StyleOptions;
    mainOpt?: StyleOptions;
    mode?: ThemeMode;
    prefix?: string;
    minFontSize?: number;
    maxFontSize?: number;
    maxLevel?: number;
};
export declare type ThemePlugin = {
    install: Function;
    uninstall: Function;
};
export declare type Handler = (...arg: any[]) => void;
export interface Theme extends Extentions {
    mode: ThemeMode;
    status: ThemeStatus;
    mount(): Theme;
    umount(): Theme;
    add(styleOpt: StyleOptions): Theme;
    remove(styleMark: StyleMark): Theme;
    update(styleOpt: StyleOptions): Theme;
    refresh(): Theme;
    change(mode?: ThemeMode): Theme;
    getStore(): Store;
    install(plugin: ThemePlugin, ...arg: any[]): Theme;
    use(plugin: ThemePlugin, ...arg: any[]): Theme;
    uninstall(plugin: ThemePlugin): Theme;
    on(type: string, handler: Handler): Theme;
    off(type: string, handler: Handler): Theme;
    emit(type: string, ...arg: any[]): Theme;
}
export interface ThemeConstructor {
    new (themeOpt?: ThemeOpt): Theme;
    EventHub: typeof EventHub;
    themeInstance: Theme | null;
    run(themeOpt?: ThemeOpt): Theme;
    mount(): Theme | undefined;
    umount(): Theme | undefined;
    add(styleOpt: StyleOptions): Theme | undefined;
    remove(styleMark: StyleMark): Theme | undefined;
    update(styleOpt: StyleOptions): Theme | undefined;
    refresh(): Theme | undefined;
    change(mode?: ThemeMode): Theme | undefined;
    install(plugin: ThemePlugin, ...arg: any[]): Theme | undefined;
    use(plugin: ThemePlugin, ...arg: any[]): Theme | undefined;
    uninstall(plugin: ThemePlugin): Theme | undefined;
    getStore(): Store | undefined;
    on(type: string, handler: Handler): Theme | undefined;
    off(type: string, handler: Handler): Theme | undefined;
    emit(type: string, ...arg: any[]): Theme | undefined;
}
export declare const Theme: ThemeConstructor;
