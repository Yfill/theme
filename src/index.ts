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

declare const window: Window & { themeInstance: Theme };
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

  static change(mode?: ThemeMode): Theme | undefined {
    return Theme.themeInstance?.change(mode);
  }

  lightStyleInstance: Style | null = null

  darkStyleInstance: Style | null = null

  mainStyleInstance: Style | null = null

  otherStyleInstanceMap: { [prop: string]: Style } = {}

  mode: ThemeMode = LIGHT_MODE

  status: ThemeStatus = NOT_MOUNTED_THEME_STATUS

  commonThemeOpt: CommonThemeOpt = { prefix: '' }

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
    // eslint-disable-next-line no-console
    if (prefix && !/^[a-zA-Z]/.test(`${prefix}`)) console.warn('The prefix must start with a letter');
    this.commonThemeOpt = {
      prefix,
      minFontSize,
      maxFontSize,
      maxLevel,
    };
    this.mode = mode;
    const cto = this.commonThemeOpt;
    this.lightStyleInstance = createStyle({ ...lightColor, ...lightOpt, mark: LIGHT_MARK }, cto);
    this.darkStyleInstance = createStyle({ ...darkColor, ...darkOpt, mark: DARK_MARK }, cto);
    this.mainStyleInstance = createStyle({ ...mainColor, ...mainOpt, mark: MAIN_MARK }, cto);
    Theme.themeInstance = this;
    window.themeInstance = this;
  }

  mount(): Theme {
    if (this.status === MOUNTED_THEME_STATUS) return this;
    if (this.mode === LIGHT_MODE) this.lightStyleInstance?.mount();
    else if (this.mode === DARK_MODE) this.darkStyleInstance?.mount();
    this.mainStyleInstance?.mount();
    objectValues(this.otherStyleInstanceMap)
      .forEach((item) => item.mount());
    this.status = MOUNTED_THEME_STATUS;
    return this;
  }

  umount(): Theme {
    if (this.status === UNMOUNTED_THEME_STATUS) return this;
    if (this.mode === LIGHT_MODE) this.lightStyleInstance?.umount();
    else if (this.mode === DARK_MODE) this.darkStyleInstance?.umount();
    this.mainStyleInstance?.umount();
    objectValues(this.otherStyleInstanceMap)
      .forEach((item) => item.umount());
    this.status = UNMOUNTED_THEME_STATUS;
    return this;
  }

  add(styleOpt: StyleOptions): Theme {
    const styleMark = styleOpt.mark;
    if (!styleMark || arrayIncludes(DEFAULT_STYLE_MARK_LIST, styleMark)) return this;
    const styleInstance = createStyle(styleOpt, this.commonThemeOpt);
    styleInstance.mount();
    this.otherStyleInstanceMap[styleMark] = styleInstance;
    return this;
  }

  remove(styleMark: StyleMark): Theme {
    if (styleMark) {
      const styleInstance = this.otherStyleInstanceMap[styleMark];
      styleInstance?.umount();
      delete this.otherStyleInstanceMap[styleMark];
    }
    return this;
  }

  update(styleOpt: StyleOptions): Theme {
    const styleMark = styleOpt.mark;
    if (
      !arrayIncludes(DEFAULT_STYLE_MARK_LIST, styleMark)
      && !this.otherStyleInstanceMap[styleMark]
    ) return this;
    const styleInstance = createStyle(styleOpt, this.commonThemeOpt);
    if (styleMark === LIGHT_MARK) {
      this.lightStyleInstance?.umount();
      this.lightStyleInstance = styleInstance;
      if (this.mode === LIGHT_MODE) this.lightStyleInstance?.mount();
    } else if (styleMark === DARK_MARK) {
      this.darkStyleInstance?.umount();
      this.darkStyleInstance = styleInstance;
      if (this.mode === DARK_MODE) this.darkStyleInstance?.mount();
    } else if (styleMark === MAIN_MARK) {
      this.mainStyleInstance?.umount();
      this.mainStyleInstance = styleInstance;
      this.mainStyleInstance?.mount();
    } else {
      this.otherStyleInstanceMap[styleMark]?.umount();
      this.otherStyleInstanceMap[styleMark] = styleInstance;
      this.otherStyleInstanceMap[styleMark]?.mount();
    }
    return this;
  }

  change(mode: ThemeMode = this.mode === LIGHT_MODE ? DARK_MODE : LIGHT_MODE): Theme {
    if (mode === this.mode) return this;
    this.umount();
    this.mode = mode;
    this.mount();
    return this;
  }
}
