// let star = '';
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 5; j++) {
//         star += '*';
//     }
//     star += '\n';
// }

// console.log(star);


//문제 7
// let star = '';
// const mStar = (a,b) => {
//     for (let i = 0; i < a; i++) {
//         for (let j = 0; j < b; j++) {
//             star += '*';
//         }
//         star += '\n';
//     }
//     return star;
// }

// console.log(mStar(3,5));

//풀이
const func = (a,b) => {
    let result = '';
    for(let i=0;i<b;i++){
        for(let j=0;j<a;j++){
            result += '*';
        }
        result += '\n';
    }
    // console.log(result);
    return result;
}

console.log(func(5,3));
func(4,4);