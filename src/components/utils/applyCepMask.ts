export const applyCepMask = (value: any) => {
  const onlyNums = value.replace(/[^\d]/g, '');
  const limitedValue = onlyNums.slice(0, 8);
  const maskedCep = limitedValue.replace(/^(\d{5})(\d{3})/, '$1-$2');
  return maskedCep;
};
