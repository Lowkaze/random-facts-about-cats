const randomFactAboutCats = document.getElementById('random-fact-about-cats');
const loadingIconWrapper = document.getElementById('loading-icon-wrapper');
const loadingIcon = document.getElementById('loading-icon');
const errorMessage =
  'Failed to fetch the random fact about cats. Please try again later.';

window.addEventListener('load', () => fetchRandomFactAboutCats());
randomFactAboutCats.addEventListener('click', () => fetchRandomFactAboutCats());

async function fetchRandomFactAboutCats() {
  randomFactAboutCats.classList.toggle('d-none');
  loadingIconWrapper.classList.toggle('d-none');
  loadingIcon.classList.toggle('fa-spin');

  setTimeout(() => {
    fetch('https://meowfacts.herokuapp.com')
      .then((response) => response.json())
      .then((data) => (randomFactAboutCats.innerText = data.data[0]))
      .catch(() => (randomFactAboutCats.innerText = errorMessage))
      .finally(() => {
        loadingIconWrapper.classList.toggle('d-none');
        loadingIcon.classList.toggle('fa-spin');
        randomFactAboutCats.classList.toggle('d-none');
      });
  }, 1000);
}
