const arr = [1, 'aa', true, 5, 10];
let result = 0;
for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]*1);
    if (arr[i]*1 === arr[i]) {
        result += arr[i];
    }
}

console.log(result);