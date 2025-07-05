const searchInput = document.getElementById('search-input');
const buttonSearch = document.querySelector('.type--search');
const buttonClear = document.querySelector('.type--clear');

function toggleButtonsVisibility(removeSearchIcon) {
  buttonSearch.classList.toggle("button--remove", removeSearchIcon);
  buttonClear.classList.toggle("button--remove", !removeSearchIcon);
}

searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
  }
});

searchInput.addEventListener('input', (e) => {
  console.log(e.target.value);
  searchInput.classList.toggle('input--active', e.target.value !== '');
  buttonClear.tabIndex = 0; // пока инпут заполнен = иконка "очистить" доступна для "tab"
  if (e.target.value === '') {
    buttonClear.tabIndex = -1;
  }
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
  buttonClear.tabIndex = -1;
});

buttonSearch.addEventListener('click', () => searchInput.focus());
