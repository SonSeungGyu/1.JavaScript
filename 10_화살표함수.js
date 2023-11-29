//익명함수
const add = function (a, b) {
    return a + b;
}

//화살표함수로 변경
const add2 = (a, b) => a + b;


//익명함수
const sum = function (a, b) {
    console.log(a + b);
    return a + b;
}

//화살표함수로 변경
const sum2 = (a, b) => {
    console.log(a + b);
    return a + b; //코드가 여러 줄 일때는 생략 불가
}

//익명함수
const hello = function (){
    console.log('안녕하세요!');
}

//화살표함수로 변경
const hello2 = () => console.log('안녕하세요!');