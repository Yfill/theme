import { transformToCss } from '../utils/transform-to-css';
import Base from './base';

export default class Border extends Base implements StyleInterface {
  static colorPropMarks: PropMark[] = [
    ['border-color', ['border-color']],
    ['border-top-color', ['border-top-color']],
    ['border-bottom-color', ['border-bottom-color']],
    ['border-left-color', ['border-left-color']],
    ['border-right-color', ['border-right-color']],
  ]

  exportStyle(): string {
    return transformToCss(
      Border.colorPropMarks,
      this.colorValueNames,
      this.mark,
      this.prefix,
    );
  }
}
