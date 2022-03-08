function solution(str) {
  const strArr = str.split('');
  const reverseArr = str.split('').reverse();
  let answer = true;
  const forward = [];
  const opposite = [];

  strArr.forEach((el) => {
    let ASCII = el.toLowerCase().charCodeAt();
    if (ASCII >= 97 && ASCII <= 122) forward.push(el.toLowerCase());
  });

  reverseArr.forEach((el) => {
    let ASCII = el.toLowerCase().charCodeAt();
    if (ASCII >= 97 && ASCII <= 122) opposite.push(el.toLowerCase());
  });

  forward.forEach((el, i) => {
    if (opposite[i] !== el) {
      answer = false;
    }
  });

  return answer;
}
console.log(solution('found7, time: study; Yduts; emit, 7Dnuof'));
