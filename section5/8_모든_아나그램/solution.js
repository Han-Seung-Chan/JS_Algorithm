function compareMaps(tmp, sH) {
  let sH1 = new Map();

  for (let [key, val] of sH) {
    sH1.set(key, val);
  }

  for (let x of tmp) {
    if (!sH1.has(x) || sH1.get(x) === 0) return 0;
    sH1.set(x, sH1.get(x) - 1);
  }

  return 1;
}

function solution(s, t) {
  let answer = 0;
  sH = new Map();
  let len = t.length;
  let tmp = s.slice(0, len);

  for (let x of t) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }

  if (compareMaps(tmp, sH)) answer++;

  for (let i = len; i < s.length; i++) {
    tmp = tmp.slice(1);
    tmp = tmp + s[i];
    if (compareMaps(tmp, sH)) answer++;
  }

  return answer;
}

console.log(solution('bacaAacba', 'abc'));
