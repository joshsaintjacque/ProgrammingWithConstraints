import initialState from './data/initialState.js';

// TODO: Add URL resources on load
// TODO: Add credits
// TODO: Add project / platform / language / twist repositories
// TODO: Add link class (setHref, show, hide - extends element?)
// TODO: Add select class (addOption, removeOption)
// TODO: Implement dark mode
// TODO: Add restore functionality
// TODO: Add ability to manage (CRUD) options
// TODO: Introduce reducers
// TODO: Add README

function onLoad() {
  initializeApplicationState();
  populateFields();
  addEventListeners();
  setAppStateFromParams();
  initializeFieldLinks();
  initializeLocks();
}

export function initializeApplicationState() {
  const hasExistingState = !!localStorage.getItem('state');
  if (!hasExistingState) {
    localStorage.setItem('state', JSON.stringify(initialState));
  }
}

export function initializeLocks() {
  const state = JSON.parse(localStorage.getItem('state'));

  Object.keys(state.fields).forEach(field => {
    const { isLocked } = state.fields[field];
    if (!isLocked) return;

    const lockButton = document.querySelector(
      `.constraint__details[data-field=${field}] .button__lock`,
    );
    initializeLockButton(field);
  });
}

function initializeFieldLinks() {
  const state = JSON.parse(localStorage.getItem('state'));

  Object.keys(state.fields).forEach(field => {
    const select = document.querySelector(`#${field}`);

    setFieldLinkURL(field, select.value);
  });
}

export function populateFields() {
  const state = JSON.parse(localStorage.getItem('state'));

  Object.keys(state).forEach(field => {
    const id = field.slice(0, -1);
    const select = document.querySelector(`#${id}`);
    if (!select) return;

    state[field].forEach(data => {
      const option = document.createElement('option');
      const text = document.createTextNode(data.name);
      option.appendChild(text);

      option.value = data.name;
      select.appendChild(option);
    });

    select.removeChild(select.options[0]);
  });
}

function onChange(event) {
  const { target } = event;
  const { id, value } = target;

  setLocationPath();
  setFieldLinkURL(id, value);
  buildPlatformLabel();
}

export function setFieldLinkURL(field, value) {
  const link = document.querySelector(`.constraint__details[data-field=${field}] a`);
  const entity = initialState[`${field}s`].find(entity => entity.name === value);
  if (!entity) return;

  link.href = entity.url;
  entity.url ? link.classList.remove('hidden') : link.classList.add('hidden');
}

export function onToggle(event) {
  const { target } = event;
  const { field } = target.dataset;
  const details = document.querySelector(`.constraint__details[data-field=${field}`);
  const areDetailsOpen = details.className.includes('--expanded');

  if (areDetailsOpen) {
    details.classList.remove('constraint__details--expanded');
    details.classList.add('constraint__details--collapsed');

    target.classList.remove('details__toggle--expanded');
  } else {
    details.classList.remove('constraint__details--collapsed');
    details.classList.add('constraint__details--expanded');

    target.classList.add('details__toggle--expanded');
  }
}

export function addEventListeners() {
  const randomizeButton = document.querySelector('.constraints__button');
  randomizeButton.addEventListener('click', randomize);

  document.querySelectorAll('select').forEach(select => {
    select.addEventListener('change', onChange);
  });

  document.querySelectorAll('.details__toggle').forEach(button => {
    button.addEventListener('click', onToggle);
  });

  document.querySelectorAll('.button__lock').forEach(button => {
    button.addEventListener('click', onLock);
  });

  document.querySelectorAll('.button__unlock').forEach(button => {
    button.addEventListener('click', onUnlock);
  });
}

export function onLock(event) {
  const { target } = event;
  const { field } = target.dataset;
  initializeLockButton(field);

  const state = JSON.parse(localStorage.getItem('state'));
  const newState = { ...state };
  newState.fields[field].isLocked = true;
  localStorage.setItem('state', JSON.stringify(newState));
}

export function onUnlock(event) {
  const { target } = event;
  const { field } = target.dataset;
  initializeUnlockButton(field);

  const state = JSON.parse(localStorage.getItem('state'));
  const newState = { ...state };
  newState.fields[field].isLocked = false;
  localStorage.setItem('state', JSON.stringify(newState));
}

export function initializeUnlockButton(field) {
  const unlockButton = document.querySelector(
    `.constraint__details[data-field=${field}] .button__unlock`,
  );
  unlockButton.classList.add('hidden');

  const lockButton = document.querySelector(
    `.constraint__details[data-field=${field}] .button__lock`,
  );
  lockButton.classList.remove('hidden');
}

export function initializeLockButton(field) {
  const lockButton = document.querySelector(
    `.constraint__details[data-field=${field}] .button__lock`,
  );
  lockButton.classList.add('hidden');

  const unlockButton = document.querySelector(
    `.constraint__details[data-field=${field}] .button__unlock`,
  );
  unlockButton.classList.remove('hidden');
}

function setAppStateFromParams() {
  const url = new URL(window.location);
  const state = JSON.parse(localStorage.getItem('state'));

  Object.keys(state.fields).forEach(param => {
    const data = url.searchParams.get(param);
    if (data) {
      document.querySelector(`#${param}`).value = data;
    }
  });
}

/**
 * Randomizes the value of all select boxes on the page several times in an
 * async process (setInterval). For testability we also randomize the fields
 * once immediately.
 *
 * While the fields are being randomized the randomize button is disabled.
 */
export function randomize() {
  const randomizeButton = document.querySelector('.button__randomize');
  randomizeButton.disabled = true;
  randomizeFields();

  let iteration = 0;
  const interval = setInterval(() => {
    randomizeFields();

    if (iteration > 5) {
      clearInterval(interval);
      randomizeButton.disabled = false;
    }

    buildPlatformLabel();
    iteration += 1;
  }, 250);
}

/**
 * Randomizes the value of all select boxes on the page from the list
 * of available options in local storage within each select box.
 */
function randomizeFields() {
  const state = JSON.parse(localStorage.getItem('state'));

  document.querySelectorAll('select').forEach(select => {
    const field = select.id;
    const { isLocked } = state.fields[field];
    if (isLocked) return;

    setSelectWithRandomValue(select);
    setLocationPath();
  });
}

export function setLocationPath() {
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

/**
 * Sets the platform field label based on the value selected. Primarily used to
 * distinguish between a/an preceeding the platform name.
 */
export function buildPlatformLabel() {
  const VOWELS = ['a', 'e', 'i', 'o', 'u'];
  const label = document.querySelector('label[for=platform]');
  const select = document.querySelector('select#platform');
  const startsWithVowel = VOWELS.includes(select.value[0].toLowerCase());

  label.innerText = startsWithVowel ? 'as an:' : 'as a:';
}

/**
 * Sets the provided select element to one of its options at random.
 *
 * @param {HTMLSelectElement} select
 */
function setSelectWithRandomValue(select) {
  const values = Array.from(select.querySelectorAll('option')).map(option => option.value);

  select.value = sample(values);
}

/**
 * Returns a random element from an array. Does not mutate the array.
 *
 * @param {any[]} array Source from which to pull random value.
 */
function sample(array) {
  return array[Math.floor(Math.random() * array.length)];
}

document.addEventListener('DOMContentLoaded', onLoad);
