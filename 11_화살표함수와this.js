//화살표함수와 this 키워드

const people = {
    name: 'gildong',
    age: 10,
    say: () => {
        console.log(this);
    }
}
console.log(this);

people.say(); //호출한 쪽: 전역(global)
const sayPeople = people.say;
sayPeople(); //호출한 쪽: 전역(global)