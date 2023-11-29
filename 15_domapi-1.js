//dir메소드는 객체의 속성을 출력
console.dir(document);

//현재 노드의 자식 노드 리스트 반환
console.dir(document.childNodes)
//[<!DOCTYPE html>, html]

console.dir(document.childNodes[1].childNodes)
//[head, text, body]