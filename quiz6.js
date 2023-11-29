
const foodList = ['Pizza','Hambuger','Chicken','Steak'];

const food1 = foodList[0];
const food2 = foodList[3];
// // 아래처럼 인덱스를 주면 마지막 인덱스를 말하는것
// // const food2 = foodList[foodList.length - 1];

// const result = food1 + '' + food2;//+는 문자열 결합 연산자



//  문제6
const result2 = () => food1 + '' + food2;


console.log(result);

//풀이
function func(arr){
    const firstVal = arr[0];
    const lastVal = arr[arr.length -1];
    const result= firstVal + '' + lastVal;

    console.log(result);
}

const arr1= ['Pizza','Hambuger','Chicken','Steak'];
func(arr1); //pizzasteak
