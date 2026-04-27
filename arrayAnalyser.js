const arrayAnalyser = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;
  const average =
    arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
    arr.length;

  const resultObj = { min, max, length, average };
  return resultObj;
};

export default arrayAnalyser;
