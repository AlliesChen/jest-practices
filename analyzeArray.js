export default function analyzeArray(arr) {
  const average =
    arr.reduce((accumulator, current) => {
      return accumulator + current;
    }) / arr.length;
  const min = arr.reduce((accumulator, current) => {
    return accumulator < current ? accumulator : current;
  });
  const max = arr.reduce((accumulator, current) => {
    return accumulator > current ? accumulator : current;
  });
  const length = arr.length;
  return { average, min, max, length };
}
