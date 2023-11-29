// html문서에서 찾은 모든 요소의 정보 출력하기
// 1개 이상의 요소들이 반환됨
// 여러개가 반환됬기 때문에 바로 사용할 수 없음

const boxEls = document.querySelectorAll('.box');
console.log(boxEls);

//forEach메소드를 사용하면 요소를 순회할 수 있음
//첫번째요소: BoxEl, 두번째요소: 인덱스 번호
boxEls.forEach(function (boxEl, index) {
    console.log(boxEl, index);
});