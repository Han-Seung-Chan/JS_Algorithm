function solution(str1, str2) {
  const obj1 = {};
  const obj2 = {};

  for (const s of str1) {
    if (obj1[s] === undefined) obj1[s] = 1;
    else obj1[s] = obj1[s] + 1;
  }

  for (const s of str2) {
    if (obj2[s] === undefined) obj2[s] = 1;
    else obj2[s] = obj2[s] + 1;
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return 'No';
  }

  return 'YES';
}
console.log(solution('AbaAeCe', 'beeAaCA'));
console.log(solution('abaCC', 'aaCab'));
