function solution(str) {
  const obj = {};
  let count = 0;
  let answer;

  for (const s of str) {
    if (obj[s] === undefined) obj[s] = 1;
    else obj[s] = obj[s] + 1;
  }

  for (const key in obj) {
    let value = obj[key];

    if (value > count) (count = value), (answer = key);
  }

  return answer;
}
console.log(solution('BACBACCACCBDEDE'));
