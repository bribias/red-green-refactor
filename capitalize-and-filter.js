const capitalizeAndFilter = (stringArr) => {

  const filterArr = stringArr.filter(item => item[0].toLowerCase() !== 'f');
  const result = filterArr.map(item => item.toUpperCase());
  return result;
};

export default capitalizeAndFilter;
