export const getEnumOptions = (enumType: any) => {
  return Object.keys(enumType).map((key) => ({
    value: enumType[key],
    label: key,
  }));
};
