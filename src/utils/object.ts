/* eslint-disable no-restricted-syntax */
export const objectValues = (obj: { [propName: string]: unknown }) => {
  const result: unknown[] = [];
  for (const key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) result.push(obj[key]);
  return result;
};

export default {
  objectValues,
};
