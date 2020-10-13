import { transformToCss } from '../utils/transform-to-css';
import Base from './base';

export default class Border extends Base implements StyleInterface {
   static colorPropMarks: PropMark[] = [
     ['border-color', ['bc', 'border-color']],
     ['border-top-color', ['btc', 'border-top-color']],
     ['border-bottom-color', ['bbc', 'border-bottom-color']],
     ['border-left-color', ['blc', 'border-left-color']],
     ['border-right-color', ['brc', 'border-right-color']],
   ]

   exportStyle(): string {
     return transformToCss(
       Border.colorPropMarks,
       this.colorTupleList,
       this.mark,
       this.prefix,
     );
   }
}
