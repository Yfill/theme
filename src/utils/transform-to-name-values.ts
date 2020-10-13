export const transformToNameValues = (
  valueNames: ValueName[],
): NameValue[] => valueNames.reduce((
  result,
  valueName,
) => {
  const [value, names] = valueName;
  const nameValues: NameValue[] = names.map((name) => [name, value]);
  return result.concat(nameValues);
}, [] as NameValue[]);
export default {
  transformToNameValues,
};
