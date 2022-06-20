// --- 검색 버튼 애니메이션 ---
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});//searchEl.click

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});//searchInputEl.focus

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});//searchInputEl.blur

// --- date ---
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();