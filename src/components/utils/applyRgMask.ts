export const applyRgMask = (value: any) => {
  const onlyNumbers = value.replace(/[^\d]/g, "");

  return onlyNumbers
    .replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, "$1.$2.$3-$4")
    .slice(0, 12);
};