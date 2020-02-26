import initialState from './data/initialState.js';

function onLoad() {
  initializeApplicationState();
  addEventListeners();
  setAppStateFromParams();
}

function initializeApplicationState() {
  const hasExistingState = !!localStorage.getItem('state');
  if (!hasExistingState) {
    localStorage.setItem('state', JSON.stringify(initialState));
  }
}

function onChange() {
  setLocationPath();
}

function addEventListeners() {
  const randomizeButton = document.querySelector('.constraints__button');
  randomizeButton.addEventListener('click', randomize);

  document.querySelectorAll('select').forEach(select => {
    select.addEventListener('change', onChange);
  });
}

function setAppStateFromParams() {
  const url = new URL(window.location);
  ['project', 'platform', 'language', 'twist'].forEach(param => {
    const data = url.searchParams.get(param);
    if (data) {
      document.querySelector(`#${param}`).value = data;
    }
  });
}

/**
 * Randomizes the value of all select boxes on the page from the list
 * of available options within each select box.
 */
function randomize() {
  document.querySelectorAll('select').forEach(select => {
    setSelectWithRandomValue(select);
    updateSelectWidth(select);
    setLocationPath();
  });
}

function setLocationPath() {
  const selectedProject = document.querySelector('#project').value;
  const selectedPlatform = document.querySelector('#platform').value;
  const selectedLanguage = document.querySelector('#language').value;
  const selectedTwist = document.querySelector('#twist').value;

  const url = new URL(window.location);
  url.searchParams.set('project', selectedProject);
  url.searchParams.set('platform', selectedPlatform);
  url.searchParams.set('language', selectedLanguage);
  url.searchParams.set('twist', selectedTwist);

  window.history.replaceState({}, 'constraints.app', `/?${url.searchParams}`);
}

function setSelectWithRandomValue(select) {
  const values = Array.from(select.querySelectorAll('option')).map(
    option => option.value,
  );

  select.value = sample(values);
}

function updateSelectWidth(select) {
  select.style.width = `${getTextRenderedWidth(select.value)}`;
}

/**
 * Returns a random element from an array. Does not mutate the array.
 *
 * @param array Source from which to pull random value.
 */
function sample(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Returns the width of the text provided, as measured in pixels.
 * This is accomplished by temporarily rendering the text to the screen
 * for the purposes of taking the measurement, then removing the element.
 *
 * This is an ungodly hack. It's tightly coupled to styling.
 *
 * @param text The string to be measured.
 */
function getTextRenderedWidth(text) {
  const span = document.createElement('span');
  span.innerHTML = text;
  span.className = 'constraint constraints constraint__value';
  document.body.appendChild(span);
  const width = span.offsetWidth + 5;
  span.remove();
  return `${width}px`;
}

document.addEventListener('DOMContentLoaded', onLoad);
