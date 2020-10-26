declare type ThemeMode = 'light' | 'dark'
declare type ThemeStatus = 'mounted' | 'unmounted' | 'notMounted'
declare type StyleMark = string
declare type ColorStatus = 'default' | 'link' | 'visited' | 'hover' | 'active'
declare type ColorGroup = string[]
declare type NameMap = { [index: string]: string }
declare type ColorStatusList = ColorStatus[]
declare type Options = {
    mark: StyleMark,
    color: string,
    colorGroup?: ColorGroup,
    nameMapGroup: (NameMap | undefined)[],
    prefix: string,
    maxLevel?: number
}
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
    backgroundColorGroup?: ColorGroup
    backgroundColorNameMap?: NameMap
    borderColorGroup?: ColorGroup
    borderColorNameMap?: NameMap
    fontColorGroup?: ColorGroup
    fontColorNameMap?: NameMap,
    fontSizeNameMap?: NameMap,
    boxShadowNameMap?: NameMap,
}
declare type ThemePlugin = {
    install: Function,
    uninstall: Function
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
declare type Store = {
    lightStyleInstance: Style | null,
    darkStyleInstance: Style | null,
    mainStyleInstance: Style | null,
    otherStyleInstanceMap: { [prop: string]: Style },
    commonThemeOpt: CommonThemeOpt = { prefix: '' },
    initialLightOpt: StyleOptions | null,
    initialDarkOpt: StyleOptions | null,
    initialMainOpt: StyleOptions | null,
}
declare interface StyleInterface {
    mark: StyleMark
    exportStyle: () => string
}
declare type StyleItem = {
    id: String,
    init: Function,
    destroy: Function
}
declare type Handler = ((...arg: any[]) => void) & { [id: string]: number };
declare interface HandlerMapItem {
    lastId: number,
    record: { [id: string]: Handler }
}
declare interface HandlerMap {
    [type: string]: HandlerMapItem
}
declare type ColorTupleList = [string, string][]
declare type SizeTupleList = [string, string][]
declare type NameValue = [string, string]
declare type ValueName = [string, string[]]
declare type MarkProp = [string, string]
declare type PropMark = [string, string[]]
