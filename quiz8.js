// const arr = [1, 'aa', true, 5, 10];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//     //console.log(arr[i]*1);
//     if (arr[i]*1 === arr[i]) {
//         result += arr[i];
//     }
// }

// console.log(result);


//문제 8
// const arr = [1, 'aa', true, 5, 10];
// let result = 0;
// const number = () => {
//     for (let i = 0; i < arr.length; i++) {
//         //console.log(arr[i]*1);
//         if (arr[i]*1 === arr[i]) {
//             result += arr[i];
//         }
//     }
//     return result;
// }

// console.log(number());


//풀이

const func = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]*1 === arr[i]) {
            sum += arr[i];
        }
    }
    console.log(sum);
}

const arr1 =  [1, 'aa', true, 6, 10];
func(arr1);



