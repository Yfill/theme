export declare type ThemeMode = 'light' | 'dark'
export declare type ThemeStatus = 'mounted' | 'unmounted' | 'notMounted'
export declare type StyleMark = string
export declare type Style = {
    mount: Function,
    umount: Function
}
export declare type StyleOptions = {
    mark: StyleMark,
    color: string,
    backgroundColor?: string,
    borderColor?: string,
    fontColor?: string,
    backgroundColorGroup?: string[]
    borderColorGroup?: string[]
    fontColorGroup?: string[]
}
export declare type ThemeOpt = {
    lightOpt?: StyleOptions,
    darkOpt?: StyleOptions,
    mainOpt?: StyleOptions,
    mode?: ThemeMode,
    prefix?: string,
    minFontSize?: number,
    maxFontSize?: number,
    maxLevel?: number,
}
export declare type CommonThemeOpt = {
    prefix: string,
    minFontSize?: number,
    maxFontSize?: number,
    maxLevel?: number
}
export declare type Store = {
    lightStyleInstance: Style | null,
    darkStyleInstance: Style | null,
    mainStyleInstance: Style | null,
    otherStyleInstanceMap: { [prop: string]: Style },
    commonThemeOpt: CommonThemeOpt = { prefix: '' },
    initialLightOpt: StyleOptions | null,
    initialDarkOpt: StyleOptions | null,
    initialMainOpt: StyleOptions | null,
}
export declare type Handler = ((...arg: any[]) => void) & { [id: string]: number };
export declare class Theme {
    constructor(themeOpt?: ThemeOpt): void

    static themeInstance: Theme | null

    static run(themeOpt?: ThemeOpt): Theme

    static mount(): Theme | undefined

    static umount(): Theme | undefined

    static add(styleOpt: StyleOptions): Theme | undefined

    static remove(styleMark: StyleMark): Theme | undefined

    static update(styleOpt: StyleOptions): Theme | undefined

    static refresh(): Theme | undefined

    static change(mode?: ThemeMode): Theme | undefined

    static install(plugin: ThemePlugin, ...arg: any[]): Theme | undefined

    static use(plugin: ThemePlugin, ...arg: any[]): Theme | undefined

    static uninstall(plugin: ThemePlugin): Theme | undefined

    static getStore(): Store | undefined

    static on(type: string, handler: Handler): Theme | undefined

    static off(type: string, handler: Handler): Theme | undefined

    static emit(type: string, ...arg: any[]): Theme | undefined

    mode: ThemeMode

    status: ThemeStatus

    mount(): Theme

    umount(): Theme

    add(styleOpt: StyleOptions): Theme

    remove(styleMark: StyleMark): Theme

    update(styleOpt: StyleOptions): Theme

    refresh(): Theme

    change(mode?: ThemeMode): Theme

    getStore(): Store

    install(plugin: ThemePlugin, ...arg: any[]): Theme

    use(plugin: ThemePlugin, ...arg: any[]): Theme

    uninstall(plugin: ThemePlugin): Theme

    on(type: string, handler: Handler): Theme

    off(type: string, handler: Handler): Theme

    emit(type: string, ...arg: any[]): Theme
}
export default Theme;
