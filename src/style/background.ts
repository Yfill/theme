import { transformToCss } from '../utils/transform-to-css';
import Base from './base';

export default class Background extends Base implements StyleInterface {
    static colorPropMark: PropMark[] = [
      ['background-color', ['bgc', 'background-color']],
    ]

    exportStyle(): string {
      return transformToCss(
        Background.colorPropMark,
        this.colorTupleList,
        this.mark,
        this.prefix,
      );
    }
}
