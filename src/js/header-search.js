const searchInput = document.getElementById('search-input');
const searchIcon = document.querySelector('.header__search-icon');
const searchIconClose = document.querySelector('.header__search-icon-close');

function iconClose() {
  searchIcon.classList.add('icon--remove');
  searchIconClose.classList.remove('icon--remove');
}
function iconSearch() {
  searchIcon.classList.remove('icon--remove');
  searchIconClose.classList.add('icon--remove');
}

searchInput.addEventListener('input', (e) => {
  console.log(e.target.value);
  if (e.target.value !== '') {
    searchInput.classList.add('input--active');
  } else {
    searchInput.classList.remove('input--active');
  }
});
searchInput.addEventListener('focus', () => {
  iconClose()
});
searchInput.addEventListener('blur', () => {
  if (!searchInput.classList.contains('input--active')) {
    iconSearch()
  }
});
searchIconClose.addEventListener('click', () => {
  searchInput.value = '';
  searchInput.focus();
})
