export const applyPhoneMask = (value: any) => {
  const onlyNums = value.replace(/[^\d]/g, '');
  const limitedValue = onlyNums.slice(0, 11);
  const maskedPhone = limitedValue.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  return maskedPhone;
};
