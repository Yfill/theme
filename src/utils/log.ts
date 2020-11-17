/* eslint-disable no-console */
export const log = (...arg: unknown[]) => console.log(...arg);

export const warn = (...arg: unknown[]) => console.warn(...arg);

export const error = (...arg: unknown[]) => console.error(...arg);

export default {
  log,
  warn,
  error,
};
