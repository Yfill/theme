/* eslint-disable no-console */
const log = (...arg:any[]) => console.log(...arg);
const error = (...arg:any[]) => console.error(...arg);
const warn = (...arg:any[]) => console.warn(...arg);
export default {
  log,
  error,
  warn,
};
