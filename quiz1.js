const person = {
    age : 30,
    name : '둘리',
    address : '서울'
}

//도트연산자를 사용하여 값 변경
person.age = 10;
person.name = '또치';
person.address = '인천';

//대괄호를 사용하여 값 변경
person["age"] = 10;
person["name"] = '또치';
person["address"] = '인천';

console.log(person);

