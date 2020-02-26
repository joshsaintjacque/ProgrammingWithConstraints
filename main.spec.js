import { describe, it, expect } from './specSupport.js';
import { randomize, setLocationPath, initializeApplicationState } from './main.js';

describe('Main', () => {
  describe('randomize()', () => {
    it('changes select box values', () => {
      document.querySelectorAll('select').forEach(select => (select.value = undefined));

      randomize();

      const numberOfSelectsWithValuesSet = Array.from(document.querySelectorAll('select')).filter(
        select => select.value,
      ).length;

      return expect(numberOfSelectsWithValuesSet, 4);
    });
  });

  describe('initializeApplicationState()', () => {
    describe('when the state already exists', () => {
      it('does not overwrite the existing state', () => {
        localStorage.setItem('state', JSON.stringify({ name: 'test state' }));
        initializeApplicationState();
        const newState = JSON.parse(localStorage.getItem('state'));
        return expect(newState.name, 'test state');
      });
    });

    describe('when the state does not exist', () => {
      it('persists the initial state to local storage', () => {
        localStorage.clear();
        initializeApplicationState();
        const newState = JSON.parse(localStorage.getItem('state'));
        return expect(newState.languages[0].name, 'Any Language');
      });
    });
  });

  describe('setLocationPath()', () => {
    it('sets the path based on the selected options', () => {
      document.querySelector('#project').value = 'calculator';
      document.querySelector('#platform').value = 'web-app';
      document.querySelector('#language').value = 'javascript';
      document.querySelector('#twist').value = 'without-dependencies';

      setLocationPath();

      return expect(
        window.location.pathname,
        '/calculator/web-app/javascript/without-dependencies',
      );
    });
  });
});
