import { createStyle } from './style/index';
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
} from './constant/index';
import { objectValues } from './utils/object';
import { error, warn } from './utils/log';
import { emit, on, off } from './utils/event';

declare const window: Window & { themeInstance: Theme };

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
  try {
    localStorage.setItem('themeInstance@mode', mode);
  } catch (err) {
    error(err.message);
  }
};
const store: Store = {
  lightStyleInstance: null,
  darkStyleInstance: null,
  mainStyleInstance: null,
  otherStyleInstanceMap: {},
  commonThemeOpt: { prefix: '' },
  initialLightOpt: null,
  initialDarkOpt: null,
  initialMainOpt: null,
};
export default class Theme {
  static themeInstance: Theme | null = null

  static run(themeOpt?: ThemeOpt): Theme {
    return new Theme(themeOpt).mount();
  }

  static mount(): Theme | undefined {
    return Theme.themeInstance?.mount();
  }

  static umount(): Theme | undefined {
    return Theme.themeInstance?.umount();
  }

  static add(styleOpt: StyleOptions): Theme | undefined {
    return Theme.themeInstance?.add(styleOpt);
  }

  static remove(styleMark: StyleMark): Theme | undefined {
    return Theme.themeInstance?.remove(styleMark);
  }

  static update(styleOpt: StyleOptions): Theme | undefined {
    return Theme.themeInstance?.update(styleOpt);
  }

  static refresh(): Theme | undefined {
    return Theme.themeInstance?.refresh();
  }

  static change(mode?: ThemeMode): Theme | undefined {
    return Theme.themeInstance?.change(mode);
  }

  static install(plugin: ThemePlugin, ...arg: any[]): Theme | undefined {
    return Theme.themeInstance?.install(plugin, ...arg);
  }

  static use(plugin: ThemePlugin, ...arg: any[]): Theme | undefined {
    return Theme.themeInstance?.install(plugin, ...arg);
  }

  static uninstall(plugin: ThemePlugin): Theme | undefined {
    return Theme.themeInstance?.uninstall(plugin);
  }

  static getStore(): Store | undefined {
    return Theme.themeInstance?.getStore();
  }

  static on(type: string, handler: Handler): Theme | undefined {
    return Theme.themeInstance?.on(type, handler);
  }

  static off(type: string, handler: Handler): Theme | undefined {
    return Theme.themeInstance?.off(type, handler);
  }

  static emit(type: string, ...arg: any[]): Theme | undefined {
    return Theme.themeInstance?.emit(type, ...arg);
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
    } = themeOpt || {
      lightOpt: lightColor,
      darkOpt: darkColor,
      mainOpt: mainColor,
      mode: LIGHT_MODE,
      prefix: '',
      minFontSize: 12,
      maxFontSize: 52,
      maxLevel: 10,
    };

    if (window.themeInstance) return window.themeInstance;
    if (prefix && !/^[a-zA-Z]/.test(`${prefix}`)) warn('The prefix must start with a letter');
    store.commonThemeOpt = {
      prefix,
      minFontSize,
      maxFontSize,
      maxLevel,
    };
    this.mode = getMode() || mode;
    const cto = store.commonThemeOpt;
    store.initialLightOpt = { ...lightColor, ...lightOpt, mark: LIGHT_MARK };
    store.initialDarkOpt = { ...darkColor, ...darkOpt, mark: DARK_MARK };
    store.initialMainOpt = { ...mainColor, ...mainOpt, mark: MAIN_MARK };
    store.lightStyleInstance = createStyle(store.initialLightOpt, cto);
    store.darkStyleInstance = createStyle(store.initialDarkOpt, cto);
    store.mainStyleInstance = createStyle(store.initialMainOpt, cto);
    Theme.themeInstance = this;
    window.themeInstance = this;
    setMode(this.mode);
  }

  mount(): Theme {
    if (this.status === MOUNTED_THEME_STATUS) return this;
    if (this.mode === LIGHT_MODE) store.lightStyleInstance?.mount();
    else if (this.mode === DARK_MODE) store.darkStyleInstance?.mount();
    store.mainStyleInstance?.mount();
    objectValues(store.otherStyleInstanceMap)
      .forEach((item) => item.mount());
    this.status = MOUNTED_THEME_STATUS;
    emit('mount', this);
    return this;
  }

  umount(): Theme {
    if (this.status === UNMOUNTED_THEME_STATUS) return this;
    store.lightStyleInstance?.umount();
    store.darkStyleInstance?.umount();
    store.mainStyleInstance?.umount();
    objectValues(store.otherStyleInstanceMap)
      .forEach((item) => item.umount());
    this.status = UNMOUNTED_THEME_STATUS;
    emit('umount', this);
    return this;
  }

  add(styleOpt: StyleOptions): Theme {
    const styleMark = styleOpt.mark;
    if (!styleMark || arrayIncludes(DEFAULT_STYLE_MARK_LIST, styleMark)) return this;
    const styleInstance = createStyle(styleOpt, store.commonThemeOpt);
    styleInstance.mount();
    store.otherStyleInstanceMap[styleMark] = styleInstance;
    emit('add', styleOpt);
    return this;
  }

  remove(styleMark: StyleMark): Theme {
    if (styleMark) {
      const styleInstance = store.otherStyleInstanceMap[styleMark];
      styleInstance?.umount();
      delete store.otherStyleInstanceMap[styleMark];
      emit('remove', styleMark);
    }
    return this;
  }

  update(styleOpt: StyleOptions): Theme {
    const styleMark = styleOpt.mark;
    if (
      !arrayIncludes(DEFAULT_STYLE_MARK_LIST, styleMark)
      && !store.otherStyleInstanceMap[styleMark]
    ) return this;
    const styleInstance = createStyle(styleOpt, store.commonThemeOpt);
    if (styleMark === LIGHT_MARK) {
      store.lightStyleInstance?.umount();
      store.lightStyleInstance = styleInstance;
      if (this.mode === LIGHT_MODE) store.lightStyleInstance?.mount();
    } else if (styleMark === DARK_MARK) {
      store.darkStyleInstance?.umount();
      store.darkStyleInstance = styleInstance;
      if (this.mode === DARK_MODE) store.darkStyleInstance?.mount();
    } else if (styleMark === MAIN_MARK) {
      store.mainStyleInstance?.umount();
      store.mainStyleInstance = styleInstance;
      store.mainStyleInstance?.mount();
    } else {
      store.otherStyleInstanceMap[styleMark]?.umount();
      store.otherStyleInstanceMap[styleMark] = styleInstance;
      store.otherStyleInstanceMap[styleMark]?.mount();
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

  install(plugin: ThemePlugin, ...arg: any[]): Theme {
    plugin.install(Theme.themeInstance, ...arg);
    return this;
  }

  use(plugin: ThemePlugin, ...arg: any[]): Theme {
    return this.install(plugin, ...arg);
  }

  uninstall(plugin: ThemePlugin): Theme {
    plugin.uninstall(Theme.themeInstance);
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

  emit(type: string, ...arg: any[]): Theme {
    emit(type, ...arg);
    return this;
  }
}
