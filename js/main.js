const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

//search 클래스를 클릭하면 검색창 포커스 함수 실행
searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});

//search 포커스되면 통합 검색 placeholder를 추가
searchInputEl,addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

//blur했을 때 통합검색 placeholder를 제거
searchInputEl,addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});