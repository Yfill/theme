declare type ThemeMode = 'light' | 'dark'
declare type ThemeStatus = 'mounted' | 'unmounted' | 'notMounted'
declare type StyleMark = string
declare type Style = {
    mount: Function,
    umount: Function
}
declare type StyleOptions = {
    mark: StyleMark,
    color: string,
    backgroundColor?: string,
    borderColor?: string,
    fontColor?: string,
    backgroundColorGroup?: string[]
    borderColorGroup?: string[]
    fontColorGroup?: string[]
}
declare type ThemeOpt = {
    lightOpt?: StyleOptions,
    darkOpt?: StyleOptions,
    mainOpt?: StyleOptions,
    mode?: ThemeMode,
    prefix?: string,
    minFontSize?: number,
    maxFontSize?: number,
    maxLevel?: number,
}
declare type CommonThemeOpt = {
    prefix: string,
    minFontSize?: number,
    maxFontSize?: number,
    maxLevel?: number
}
declare class Theme {

    constructor(themeOpt?: ThemeOpt): void

    static themeInstance: Theme | null

    static run(themeOpt?: ThemeOpt): Theme

    static mount(): Theme | undefined

    static umount(): Theme | undefined

    static add(styleOpt: StyleOptions): Theme | undefined

    static remove(styleMark: StyleMark): Theme | undefined

    static update(styleOpt: StyleOptions): Theme | undefined

    static change(mode?: ThemeMode): Theme | undefined

    lightStyleInstance: Style | null

    darkStyleInstance: Style | null

    mainStyleInstance: Style | null

    otherStyleInstanceMap: { [prop: string]: Style }

    mode: ThemeMode

    status: ThemeStatus

    commonThemeOpt: CommonThemeOpt = { prefix: '' }

    mount(): Theme

    umount(): Theme

    add(styleOpt: StyleOptions): Theme

    remove(styleMark: StyleMark): Theme

    update(styleOpt: StyleOptions): Theme

    change(mode?: ThemeMode): Theme
}
export default Theme
