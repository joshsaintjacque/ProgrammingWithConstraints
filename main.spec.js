import { describe, it, expect, addOptionToSelect } from './specSupport.js';
import {
  randomize,
  setLocationPath,
  initializeApplicationState,
  populateFields,
  setFieldLinkURL,
  onToggle,
  initializeLockButton,
  initializeUnlockButton,
} from './main.js';

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
      const select = document.querySelector('#project');
      const option = 'Cheesy Double Beef Burrito';
      addOptionToSelect({ select, option });
      select.value = option;

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

  describe('setFieldLinkURL()', () => {
    it('shows the field link', () => {
      setFieldLinkURL('project', 'Calculator');
      const link = document.querySelector('.constraint__details[data-field=project] a');

      return expect(Array.from(link.classList)).notToContain('hidden');
    });

    it('sets the field link href', () => {
      setFieldLinkURL('project', 'Calculator');
      const link = document.querySelector('.constraint__details[data-field=project] a');

      return expect(link.href).toBe(
        'https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Calculator-App.md',
      );
    });
  });

  describe('onToggle()', () => {
    describe('when the details are collapsed', () => {
      const toggleButton = document.querySelector('.details__toggle[data-field=project]');
      const details = document.querySelector(`.constraint__details[data-field=project`);

      onToggle({ target: toggleButton });

      it('adds the expanded class', () => {
        return expect(Array.from(details.classList)).toContain('constraint__details--expanded');
      });

      it('removes the collapsed class', () => {
        return expect(Array.from(details.classList)).notToContain('constraint__details--collapsed');
      });

      it('switches the toggle state', () => {
        return expect(Array.from(toggleButton.classList)).toContain('details__toggle--expanded');
      });
    });

    describe('when the details are expanded', () => {
      const toggleButton = document.querySelector('.details__toggle[data-field=project]');
      const details = document.querySelector(`.constraint__details[data-field=project`);

      onToggle({ target: toggleButton });

      it('removes the expanded class', () => {
        return expect(Array.from(details.classList)).notToContain('constraint__details--expanded');
      });

      it('adds the collapsed class', () => {
        return expect(Array.from(details.classList)).toContain('constraint__details--collapsed');
      });

      it('switches the toggle state', () => {
        return expect(Array.from(toggleButton.classList)).notToContain('details__toggle--expanded');
      });
    });
  });
  describe('initializeLockButton()', () => {
    const lockButton = document.querySelector(
      `.constraint__details[data-field=language] .button__lock`,
    );
    const unlockButton = document.querySelector(
      `.constraint__details[data-field=language] .button__unlock`,
    );

    initializeLockButton('language');

    it('hides the lock button', () => {
      return expect(Array.from(lockButton.classList)).toContain('hidden');
    });

    it('shows the unlock button', () => {
      return expect(Array.from(unlockButton.classList)).notToContain('hidden');
    });
  });

  describe('initializeUnlockButton()', () => {
    const lockButton = document.querySelector(
      `.constraint__details[data-field=platform] .button__lock`,
    );
    const unlockButton = document.querySelector(
      `.constraint__details[data-field=platform] .button__unlock`,
    );

    initializeUnlockButton('platform');

    it('hides the unlock button', () => {
      return expect(Array.from(unlockButton.classList)).toContain('hidden');
    });

    it('shows the lock button', () => {
      return expect(Array.from(lockButton.classList)).notToContain('hidden');
    });
  });
});
