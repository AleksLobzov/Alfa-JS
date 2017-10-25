// SUM
export default function sum(a) {
  let cumSum = a;

  function sum(b) {
    if (b) {
      cumSum += b;
      return sum;
    } else {
      return cumSum;
    }
  };

  return sum;
}
