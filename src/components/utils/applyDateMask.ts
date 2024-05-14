export const applyDateMask = (value: any) => {
  const onlyNums = value.replace(/[^\d]/g, '');
  let formattedDate = '';

  if (onlyNums.length > 0) {
    formattedDate += onlyNums.slice(0, 2);
  }

  if (onlyNums.length > 2) {
    formattedDate += '-' + onlyNums.slice(2, 4);
  }

  if (onlyNums.length > 4) {
    formattedDate += '-' + onlyNums.slice(4, 8);
  }

  return formattedDate;
};
