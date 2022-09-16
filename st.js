let arry = [1, 5, 2, 6, 3, 7, 4];
let conmmand = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];
//result = [5, 6, 3]

function solution(array, commands) {
  let answer = [];
  for (item of commands) {
    let start = item[0];
    let end = item[1];
    let newArry = array.slice(start - 1, end);
    console.log(newArry);
    newArry.sort((a, b) => a - b);
    let target = item[2] - 1;
    console.log(target);
    answer.push(newArry[target]);
  }
  return answer
}

console.log(solution(arry, conmmand));
