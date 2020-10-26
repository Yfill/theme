import { transformToCss } from '../utils/transform-to-css';
import Base from './base';

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
}
