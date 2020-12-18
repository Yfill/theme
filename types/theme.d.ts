import EventHub from '@yfill/event-hub';
import type { Style, CommonThemeOpt, StyleMark, StyleOptions } from './index';
import { Extentions } from './extentions';
export declare type ThemeMode = 'light' | 'dark';
export declare type ThemeStatus = 'mounted' | 'unmounted' | 'notMounted';
export declare type Store = {
    lightStyle: Style | null;
    darkStyle: Style | null;
    mainStyle: Style | null;
    otherStyleMap: {
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
    enableCssVariables?: boolean;
};
export declare type ThemePlugin = {
    install: Function;
    uninstall: Function;
};
export declare type Handler = (...arg: unknown[]) => void;
export interface Theme extends Extentions {
    mode: ThemeMode;
    status: ThemeStatus;
    storageHandler(): void;
    mount(): Theme;
    umount(): Theme;
    add(styleOpt: StyleOptions): Theme;
    remove(styleMark: StyleMark): Theme;
    update(styleOpt: StyleOptions): Theme;
    refresh(): Theme;
    change(mode?: ThemeMode): Theme;
    getStore(): Store;
    install(plugin: ThemePlugin, ...arg: unknown[]): Theme;
    use(plugin: ThemePlugin, ...arg: unknown[]): Theme;
    uninstall(plugin: ThemePlugin): Theme;
    on(type: string, handler: Handler): Theme;
    off(type: string, handler: Handler): Theme;
    emit(type: string, ...arg: unknown[]): Theme;
}
export interface ThemeConstructor {
    new (themeOpt?: ThemeOpt): Theme;
    EventHub: typeof EventHub;
    instance: Theme | null;
    run(themeOpt?: ThemeOpt): Theme;
    mount(): Theme | undefined;
    umount(): Theme | undefined;
    add(styleOpt: StyleOptions): Theme | undefined;
    remove(styleMark: StyleMark): Theme | undefined;
    update(styleOpt: StyleOptions): Theme | undefined;
    refresh(): Theme | undefined;
    change(mode?: ThemeMode): Theme | undefined;
    install(plugin: ThemePlugin, ...arg: unknown[]): Theme | undefined;
    use(plugin: ThemePlugin, ...arg: unknown[]): Theme | undefined;
    uninstall(plugin: ThemePlugin): Theme | undefined;
    getStore(): Store | undefined;
    on(type: string, handler: Handler): Theme | undefined;
    off(type: string, handler: Handler): Theme | undefined;
    emit(type: string, ...arg: unknown[]): Theme | undefined;
}
export declare const Theme: ThemeConstructor;
