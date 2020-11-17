export const curry = (
  fn: Function,
  ...arg: unknown[]
) => (arg.length >= fn.length
  ? fn(...arg)
  : (...params: unknown[]) => curry(fn, ...arg, ...params));

export default { curry };
