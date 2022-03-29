function solution(m, product) {
  let result = 0;

  for (let i = 0; i < product.length; i++) {
    let totalCost = 0;
    let count = 0;

    product[i][0] = product[i][0] / 2;

    const sortedArray = product
      .map((value) => value.reduce((acc, cur) => acc + cur))
      .sort((a, b) => a - b);

    for (let j = 0; j < product.length; j++) {
      if (totalCost + sortedArray[j] <= m) {
        totalCost += sortedArray[j];
        count++;
      } else {
        product[i][0] = product[i][0] * 2;
        break;
      }
      if (result < count) result = count;
    }
  }
  return result;
}

console.log(
  solution(28, [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ])
);
