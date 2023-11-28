//while문

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// for문
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//for-in 문
let arr = [3, 4, 5];
for (let i in arr){//배열을 순회하면서 출력
    console.log(i + ', ' + arr[i]);
}