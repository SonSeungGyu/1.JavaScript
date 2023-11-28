
const foodList = ['Pizza','Hambuger','Chicken','Steak'];

const food1 = foodList[0];
const food2 = foodList[3];
// 아래처럼 인덱스를 주면 마지막 인덱스를 말하는것
// const food2 = foodList[foodList.length - 1];

const result = food1 + '' + food2;//+는 문자열 결합 연산자

console.log(result);