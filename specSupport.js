export function describe(name, callback) {
  console.log(`${buildLeadingWhitespace()} ${name}`);
  callback();
}

export function it(name, callback) {
  const isSuccess = callback();
  const icon = isSuccess ? '✔' : '❌';
  console.log(`${buildLeadingWhitespace()} ${icon} ${name}`);
}

function buildLeadingWhitespace() {
  return Array(getCallstackDepth(2))
    .fill('  ')
    .join('');
}

function getCallstackDepth(adjuster = 1) {
  return (
    new Error().stack.split('\n').filter(line => line.split('@')[0].length > 0)
      .length - adjuster
  );
}

export function expect(value, expectation) {
  if (value === expectation) return true;
  console.warn(`Expected ${value} to equal ${expectation}`);
  return false;
}
