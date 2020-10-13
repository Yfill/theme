export const curry: any = (
  fn: Function,
  ...arg: any
) => (arg.length >= fn.length
  ? fn(...arg)
  : (...params: any) => curry(fn, ...arg, ...params));
export default { curry };
