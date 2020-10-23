/* eslint-disable no-console */
export const log = (...arg: any[]) => console.log(...arg);
export const warn = (...arg: any[]) => console.warn(...arg);
export const error = (...arg: any[]) => console.error(...arg);
export default {
  log,
  warn,
  error,
};
