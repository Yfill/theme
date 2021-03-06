import { transformToCss, transformToCssVariables } from '../utils/transform-to-css';
import Base from './base';
import type { StyleInterface, PropMark } from './base';

export default class Background extends Base implements StyleInterface {
  static colorPropMark: PropMark[] = [
    ['background-color', ['background-color']],
  ]

  exportStyle(): string {
    return transformToCss(
      Background.colorPropMark,
      this.colorValueNames,
      this.mark,
      this.prefix,
    );
  }

  exportCssVariables(): string {
    return transformToCssVariables(
      Background.colorPropMark,
      this.colorValueNames,
      this.mark,
      this.prefix,
    );
  }
}
