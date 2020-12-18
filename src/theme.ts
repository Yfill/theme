import EventHub from '@yfill/event-hub';
import { createStyle } from './style';
import lightColor from './color/light';
import darkColor from './color/dark';
import mainColor from './color/main';
import { arrayIncludes } from './utils/array';
import {
  DEFAULT_STYLE_MARK_LIST,
  LIGHT_MODE,
  DARK_MODE,
  LIGHT_MARK,
  DARK_MARK,
  MAIN_MARK,
  NOT_MOUNTED_THEME_STATUS,
  MOUNTED_THEME_STATUS,
  UNMOUNTED_THEME_STATUS,
} from './constant';
import { objectValues } from './utils/object';
import { error, warn } from './utils/log';
import type {
  Style, CommonThemeOpt, StyleMark, StyleOptions,
} from './index';
import { Extentions } from './extentions';

export type ThemeMode = 'light' | 'dark'

export type ThemeStatus = 'mounted' | 'unmounted' | 'notMounted'

export type Store = {
  lightStyle: Style | null,
  darkStyle: Style | null,
  mainStyle: Style | null,
  otherStyleMap: { [prop: string]: Style },
  commonThemeOpt: CommonThemeOpt,
  initialLightOpt: StyleOptions | null,
  initialDarkOpt: StyleOptions | null,
  initialMainOpt: StyleOptions | null,
}

export type ThemeOpt = {
  lightOpt?: StyleOptions,
  darkOpt?: StyleOptions,
  mainOpt?: StyleOptions,
  mode?: ThemeMode,
  prefix?: string,
  minFontSize?: number,
  maxFontSize?: number,
  maxLevel?: number,
  enableCssVariables?: boolean
}

export type ThemePlugin = {
  install: Function,
  uninstall: Function
}

export type Handler = (...arg: unknown[]) => void;

const eventHub = new EventHub();

const on = eventHub.on.bind(eventHub);

const off = eventHub.off.bind(eventHub);

const emit = eventHub.emit.bind(eventHub);

const addMarkToRoot = (attr: string, value: string) => {
  document.documentElement.setAttribute(attr, value);
};

const getMode = (): ThemeMode | null => {
  let mode: String | null = null;
  try {
    mode = localStorage.getItem('themeInstance@mode');
  } catch (err) {
    error(err.message);
    mode = null;
  }
  if (!arrayIncludes([LIGHT_MODE, DARK_MODE], mode)) mode = null;
  return mode as ThemeMode | null;
};

const setMode = (mode: ThemeMode): void => {
  addMarkToRoot('theme-mode', mode);
  try {
    localStorage.setItem('themeInstance@mode', mode);
  } catch (err) {
    error(err.message);
  }
};

const store: Store = {
  lightStyle: null,
  darkStyle: null,
  mainStyle: null,
  otherStyleMap: {},
  commonThemeOpt: { prefix: '' },
  initialLightOpt: null,
  initialDarkOpt: null,
  initialMainOpt: null,
};

export interface Theme extends Extentions {
  mode: ThemeMode
  status: ThemeStatus
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
  new(themeOpt?: ThemeOpt): Theme
  EventHub: typeof EventHub
  instance: Theme | null
  run(themeOpt?: ThemeOpt): Theme
  mount(): Theme | undefined
  umount(): Theme | undefined
  add(styleOpt: StyleOptions): Theme | undefined
  remove(styleMark: StyleMark): Theme | undefined
  update(styleOpt: StyleOptions): Theme | undefined
  refresh(): Theme | undefined
  change(mode?: ThemeMode): Theme | undefined
  install(plugin: ThemePlugin, ...arg: unknown[]): Theme | undefined
  use(plugin: ThemePlugin, ...arg: unknown[]): Theme | undefined
  uninstall(plugin: ThemePlugin): Theme | undefined
  getStore(): Store | undefined
  on(type: string, handler: Handler): Theme | undefined
  off(type: string, handler: Handler): Theme | undefined
  emit(type: string, ...arg: unknown[]): Theme | undefined
}

declare const window: Window & { themeInstance: Theme };

// eslint-disable-next-line no-redeclare
export const Theme: ThemeConstructor = class {
  static EventHub = EventHub

  static instance: Theme | null = null

  static run(themeOpt?: ThemeOpt): Theme {
    return new Theme(themeOpt).mount();
  }

  static mount(): Theme | undefined {
    return Theme.instance?.mount();
  }

  static umount(): Theme | undefined {
    return Theme.instance?.umount();
  }

  static add(styleOpt: StyleOptions): Theme | undefined {
    return Theme.instance?.add(styleOpt);
  }

  static remove(styleMark: StyleMark): Theme | undefined {
    return Theme.instance?.remove(styleMark);
  }

  static update(styleOpt: StyleOptions): Theme | undefined {
    return Theme.instance?.update(styleOpt);
  }

  static refresh(): Theme | undefined {
    return Theme.instance?.refresh();
  }

  static change(mode?: ThemeMode): Theme | undefined {
    return Theme.instance?.change(mode);
  }

  static install(plugin: ThemePlugin, ...arg: unknown[]): Theme | undefined {
    return Theme.instance?.install(plugin, ...arg);
  }

  static use(plugin: ThemePlugin, ...arg: unknown[]): Theme | undefined {
    return Theme.instance?.install(plugin, ...arg);
  }

  static uninstall(plugin: ThemePlugin): Theme | undefined {
    return Theme.instance?.uninstall(plugin);
  }

  static getStore(): Store | undefined {
    return Theme.instance?.getStore();
  }

  static on(type: string, handler: Handler): Theme | undefined {
    return Theme.instance?.on(type, handler);
  }

  static off(type: string, handler: Handler): Theme | undefined {
    return Theme.instance?.off(type, handler);
  }

  static emit(type: string, ...arg: unknown[]): Theme | undefined {
    return Theme.instance?.emit(type, ...arg);
  }

  mode: ThemeMode = LIGHT_MODE

  status: ThemeStatus = NOT_MOUNTED_THEME_STATUS

  constructor(themeOpt?: ThemeOpt) {
    const {
      lightOpt = lightColor,
      darkOpt = darkColor,
      mainOpt = mainColor,
      mode = LIGHT_MODE,
      prefix = '',
      minFontSize = 12,
      maxFontSize = 52,
      maxLevel = 10,
      enableCssVariables = false,
    } = themeOpt || {
      lightOpt: lightColor,
      darkOpt: darkColor,
      mainOpt: mainColor,
      mode: LIGHT_MODE,
      prefix: '',
      minFontSize: 12,
      maxFontSize: 52,
      maxLevel: 10,
      enableCssVariables: false,
    };

    if (window.themeInstance) return window.themeInstance;
    if (prefix && !/^[a-zA-Z]/.test(`${prefix}`)) warn('The prefix must start with a letter');
    store.commonThemeOpt = {
      prefix,
      minFontSize,
      maxFontSize,
      maxLevel,
      enableCssVariables,
    };
    this.mode = getMode() || mode;
    const cto = store.commonThemeOpt;
    const lOpt = {
      ...(lightOpt || lightColor), color: lightOpt?.color || lightColor.color, mark: LIGHT_MARK,
    };
    const dOpt = {
      ...(darkOpt || darkColor), color: darkOpt?.color || darkColor.color, mark: DARK_MARK,
    };
    const mOpt = {
      ...(mainOpt || mainColor), color: mainOpt?.color || mainColor.color, mark: MAIN_MARK,
    };
    store.initialLightOpt = lOpt;
    store.initialDarkOpt = dOpt;
    store.initialMainOpt = mOpt;
    store.lightStyle = createStyle(lOpt, cto);
    store.darkStyle = createStyle(dOpt, cto);
    store.mainStyle = createStyle(mOpt, cto);
    Theme.instance = this;
    setMode(this.mode);
    window.themeInstance = this;
  }

  storageHandler(): void {
    const currentMode = getMode();
    if (currentMode) this.change(currentMode);
  }

  mount(): Theme {
    if (this.status === MOUNTED_THEME_STATUS) return this;
    if (this.mode === LIGHT_MODE) store.lightStyle?.mount();
    else if (this.mode === DARK_MODE) store.darkStyle?.mount();
    store.mainStyle?.mount();
    objectValues(store.otherStyleMap).forEach((item) => (item as Style).mount());
    this.status = MOUNTED_THEME_STATUS;
    emit('mount', this);
    window.addEventListener('storage', this.storageHandler);
    return this;
  }

  umount(): Theme {
    if (this.status === UNMOUNTED_THEME_STATUS) return this;
    store.lightStyle?.umount();
    store.darkStyle?.umount();
    store.mainStyle?.umount();
    objectValues(store.otherStyleMap).forEach((item) => (item as Style).umount());
    this.status = UNMOUNTED_THEME_STATUS;
    emit('umount', this);
    window.removeEventListener('storage', this.storageHandler);
    return this;
  }

  add(styleOpt: StyleOptions): Theme {
    const styleMark = styleOpt.mark;
    if (!styleMark || arrayIncludes(DEFAULT_STYLE_MARK_LIST, styleMark)) return this;
    const styleInstance = createStyle(styleOpt, store.commonThemeOpt);
    styleInstance.mount();
    store.otherStyleMap[styleMark] = styleInstance;
    emit('add', styleOpt);
    return this;
  }

  remove(styleMark: StyleMark): Theme {
    if (styleMark) {
      const styleInstance = store.otherStyleMap[styleMark];
      styleInstance?.umount();
      delete store.otherStyleMap[styleMark];
      emit('remove', styleMark);
    }
    return this;
  }

  update(styleOpt: StyleOptions): Theme {
    const styleMark = styleOpt.mark;
    if (
      !arrayIncludes(DEFAULT_STYLE_MARK_LIST, styleMark)
      && !store.otherStyleMap[styleMark]
    ) return this;
    const styleInstance = createStyle(styleOpt, store.commonThemeOpt);
    if (styleMark === LIGHT_MARK) {
      store.lightStyle?.umount();
      store.lightStyle = styleInstance;
      if (this.mode === LIGHT_MODE) store.lightStyle?.mount();
    } else if (styleMark === DARK_MARK) {
      store.darkStyle?.umount();
      store.darkStyle = styleInstance;
      if (this.mode === DARK_MODE) store.darkStyle?.mount();
    } else if (styleMark === MAIN_MARK) {
      store.mainStyle?.umount();
      store.mainStyle = styleInstance;
      store.mainStyle?.mount();
    } else {
      store.otherStyleMap[styleMark]?.umount();
      store.otherStyleMap[styleMark] = styleInstance;
      store.otherStyleMap[styleMark]?.mount();
    }
    emit('update', styleOpt);
    return this;
  }

  refresh(): Theme {
    this.umount().mount();
    emit('refresh', this);
    return this;
  }

  change(mode: ThemeMode = this.mode === LIGHT_MODE ? DARK_MODE : LIGHT_MODE): Theme {
    if (mode === this.mode) return this;
    this.mode = mode;
    this.refresh();
    setMode(this.mode);
    emit('change', mode);
    return this;
  }

  getStore(): Store {
    return JSON.parse(JSON.stringify(store));
  }

  install(plugin: ThemePlugin, ...arg: unknown[]): Theme {
    plugin.install(Theme.instance, ...arg);
    return this;
  }

  use(plugin: ThemePlugin, ...arg: unknown[]): Theme {
    return this.install(plugin, ...arg);
  }

  uninstall(plugin: ThemePlugin): Theme {
    plugin.uninstall(Theme.instance);
    return this;
  }

  on(type: string, handler: Handler): Theme {
    on(type, handler);
    return this;
  }

  off(type: string, handler: Handler): Theme {
    off(type, handler);
    return this;
  }

  emit(type: string, ...arg: unknown[]): Theme {
    emit(type, ...arg);
    return this;
  }
};
