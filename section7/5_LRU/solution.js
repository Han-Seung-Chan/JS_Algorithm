function solution(num, arr) {
  const cache = [];

  arr.forEach((vl) => {
    if (cache.includes(vl)) {
      const removeNum = cache.indexOf(vl);

      cache.splice(removeNum, 1);
      cache.unshift(vl);
    }

    if (!cache.includes(vl)) {
      if (cache.length < num) {
        cache.unshift(vl);
      } else {
        cache.pop();
        cache.unshift(vl);
      }
    }
  });

  return cache;
}

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
