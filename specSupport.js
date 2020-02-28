import initialState from './data/initialState.js';

export function describe(name, callback) {
  const url = new URL(window.location);
  const isTestRun = url.searchParams.get('runTests');

  if (isTestRun === null) return;

  console.log(`${buildLeadingWhitespace()} ${name}`);
  callback && callback();
}

export function it(name, callback) {
  const isSuccess = callback && callback();
  const icon = isSuccess ? '✔' : '❌';
  console.log(`${buildLeadingWhitespace()} ${icon} ${name}`);
  cleanAndResetApp();
}

function buildLeadingWhitespace() {
  return Array(getCallstackDepth(2))
    .fill('  ')
    .join('');
}

function getCallstackDepth(adjuster = 1) {
  return (
    new Error().stack.split('\n').filter(line => line.split('@')[0].length > 0).length - adjuster
  );
}

export function expect(value) {
  function toBe(expectation) {
    if (value === expectation) return true;
    console.warn(`Expected ${value} to equal ${expectation}`);
  }

  function notToBe(expectation) {
    if (value !== expectation) return true;
    console.warn(`Expected ${value} not to equal ${expectation}`);
  }

  function toContain(expectation) {
    if (value.includes(expectation)) return true;
    console.warn(`Expected ${value} to contain ${expectation}`);
  }

  function notToContain(expectation) {
    if (!value.includes(expectation)) return true;
    console.warn(`Expected ${value} not to contain ${expectation}`);
  }

  function toBeGreaterThan(expectation) {
    if (value > expectation) return true;
    console.warn(`Expected ${value} to be greater than ${expectation}`);
  }

  return {
    toBe,
    toContain,
    notToContain,
    toBeGreaterThan,
    notToBe,
  };
}

function cleanAndResetApp() {
  localStorage.clear();
  localStorage.setItem('state', JSON.stringify(initialState));
}

/**
 * Adds a new child option element with the provided text to the provided select
 * element. The option's value is the same as the text.
 *
 * @param {{option: string, select: HTMLSelectElement}} options Include the
 * string value of the option to add and the select element to add it to.
 */
export function addOptionToSelect({ option, select }) {
  const optionElement = document.createElement('option');
  const text = document.createTextNode(option);
  optionElement.appendChild(text);
  optionElement.value = option;
  select.appendChild(optionElement);
}
