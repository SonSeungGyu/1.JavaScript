// html요소에  class 속성 추가하기

const boxEl = document.querySelector('.box');

boxEl.addEventListener('click',function(){
    //toggle: 클래스 목록중에서 active 값이 있으면 삭제 없으면 추가.
    boxEl.classList.toggle('active');
    let hasActive = boxEl.classList.contains('active');
    console.log(hasActive);

});