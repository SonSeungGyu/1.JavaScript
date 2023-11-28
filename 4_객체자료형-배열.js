// Array(배열)

const arr1 = ['Apple', 'Banana', 'Cherry'];

console.log(arr1[0]); //인덱스 사용하여 배열의 값 가져오기
console.log(arr1[1]);
console.log(arr1[2]);


const arr2 = ['a', 'b', 1, 2, true]; //자료형이 달라도 함께 선언 가능

arr2.push(3); //배열의 push메소드로 새로운 요소 추가
console.log(arr2);
//arr2.pop(); // 끝 값을 꺼낸다(삭제)
//arr2.splice(시작인덱스, 삭제하고 싶은 개수); //시작인덱스부터 삭제하고 싶은 개수를 삭제


//객체 배열
const objArr = [];
objArr.push({
    name: 'Americano'
});
objArr.push({
    name: 'Latte'
});

console.log(objArr);
console.log(objArr[0]);
console.log(objArr.length);

//const는 상수를 선언하는 함수 이지만 이때 상수를 저장하는 참조 변수의
// 값이 변하는게 아닌 힙 영역의 배열에 변화가 있을땐 참조 변수가 바귀는것이 아니기 때문에
// const를 이용해서 배열을 선언하여도 값을 push 하거나 pop 할 수 있다.