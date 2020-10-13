export const arrayIncludes = (items: any[], item: any) => {
  const { length } = items;
  for (let index = 0; index < length; index += 1) if (items[index] === item) return true;
  return false;
};
export default {
  arrayIncludes,
};
