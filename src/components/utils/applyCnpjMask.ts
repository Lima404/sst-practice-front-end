export const applyCnpjMask = (value: any) => {
  const onlyNums = value.replace(/[^\d]/g, '');
  const limitedValue = onlyNums.slice(0, 14);
  const maskedCnpj = limitedValue.replace(
      /^(\d{2})(\d{3})(\d{3})/,
      '$1.$2.$3'
  ).replace(
      /^(\d{2})\.(\d{3})\.(\d{3})(\d{4})/,
      '$1.$2.$3/$4'
  ).replace(
      /^(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})(\d{2})/,
      '$1.$2.$3/$4-$5'
  );
  return maskedCnpj;
};