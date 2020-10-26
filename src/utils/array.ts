export const arrayIncludes = (items: any[], item: any) => {
  const { length } = items;
  for (let index = 0; index < length; index += 1) if (items[index] === item) return true;
  return false;
};
export const arrayFilterEmptyItem = (
  items: any[],
) => items.filter((item) => item !== null && item !== undefined);
export default {
  arrayIncludes,
  arrayFilterEmptyItem,
};
