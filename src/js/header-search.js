const searchInput = document.getElementById('search-input');
const buttonSearch = document.querySelector('.type--search');
const buttonClear = document.querySelector('.type--clear');

searchInput.addEventListener('input', (e) => {
  console.log(e.target.value);
  searchInput.classList.toggle('input--active', e.target.value !== '');
});

searchInput.addEventListener('focus', () => {
  toggleButtonsVisibility(true);
});

searchInput.addEventListener('blur', () => {
  !searchInput.classList.contains('input--active') && toggleButtonsVisibility(false);
});

buttonClear.addEventListener('click', () => {
  searchInput.value = '';
  searchInput.classList.remove('input--active');
  toggleButtonsVisibility(false);
  searchInput.focus();
});

buttonSearch.addEventListener('click', () => searchInput.focus());


function toggleButtonsVisibility(removeSearchIcon) {
  buttonSearch.classList.toggle("button--remove", removeSearchIcon);
  buttonClear.classList.toggle("button--remove", !removeSearchIcon);
}
