import { describe, it, expect } from './specSupport.js';
import { randomize, setLocationPath, initializeApplicationState, populateFields } from './main.js';

describe('Main', () => {
  describe('randomize()', () => {
    it('changes select box values', () => {
      document.querySelectorAll('select').forEach(select => (select.value = undefined));

      randomize();

      const numberOfSelectsWithValuesSet = Array.from(document.querySelectorAll('select')).filter(
        select => select.value,
      ).length;

      return expect(numberOfSelectsWithValuesSet).toBe(4);
    });
  });

  describe('initializeApplicationState()', () => {
    describe('when the state already exists', () => {
      it('does not overwrite the existing state', () => {
        localStorage.setItem('state', JSON.stringify({ name: 'test state' }));
        initializeApplicationState();
        const newState = JSON.parse(localStorage.getItem('state'));
        return expect(newState.name).toBe('test state');
      });
    });

    describe('when the state does not exist', () => {
      it('persists the initial state to local storage', () => {
        localStorage.clear();
        initializeApplicationState();
        const newState = JSON.parse(localStorage.getItem('state'));
        return expect(newState.languages[0].name).toBe('Any Language');
      });
    });
  });

  describe('setLocationPath()', () => {
    it('sets the path based on the selected options', () => {
      // Add an option to the field
      const select = document.querySelector('#project');
      const option = document.createElement('option');
      const text = document.createTextNode('Cheesy Double Beef Burrito');
      option.appendChild(text);
      option.value = 'Cheesy Double Beef Burrito';
      select.appendChild(option);

      // Select the option
      select.value = 'Cheesy Double Beef Burrito';

      // Act
      setLocationPath();

      return expect(window.location.search).toContain('project=Cheesy+Double+Beef+Burrito');
    });

    describe('populateFields()', () => {
      it('loads options from state into the constraint fields', () => {
        // Arrange - remove existing options from one of the fields
        const select = document.querySelector('#platform');
        Array.from(select.options).forEach(option => select.removeChild(option));

        // Act
        populateFields();

        // Assert
        return expect(document.querySelector('#platform').options.length).toBeGreaterThan(0);
      });
    });
  });
});
