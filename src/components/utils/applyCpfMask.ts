export const applyCpfMask = (value: any) => {
  const onlyNums = value.replace(/[^\d]/g, '');
  let formattedCpf = '';

  if (onlyNums.length > 0) {
      formattedCpf += onlyNums.slice(0, 3);
  }

  if (onlyNums.length > 3) {
      formattedCpf += '.' + onlyNums.slice(3, 6);
  }

  if (onlyNums.length > 6) {
      formattedCpf += '.' + onlyNums.slice(6, 9);
  }

  if (onlyNums.length > 9) {
      formattedCpf += '-' + onlyNums.slice(9, 11);
  }

  return formattedCpf;
};
