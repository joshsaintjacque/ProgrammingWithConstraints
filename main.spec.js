import { describe, it, expect } from './specSupport.js';

describe('Main', () => {
  describe('randomize()', () => {
    it('changes select box values', () => {
      document
        .querySelectorAll('select')
        .forEach(select => (select.value = undefined));

      randomize();

      const numberOfSelectsWithValuesSet = Array.from(
        document.querySelectorAll('select'),
      ).filter(select => select.value).length;

      return expect(numberOfSelectsWithValuesSet, 4);
    });

    it('updates the width of the select', () => {
      document
        .querySelectorAll('select')
        .forEach(select => (select.style.width = '0px'));

      randomize();

      const numberOfSelectsWithPositiveWidth = Array.from(
        document.querySelectorAll('select'),
      ).filter(select => select.style.width !== '0px').length;

      return expect(numberOfSelectsWithPositiveWidth, 4);
    });
  });

  describe('getTextRenderedWidth()', () => {
    it('returns the rendered width of the text in pixels', () => {
      const result = getTextRenderedWidth('trekkies are the worst fans');

      return expect(result, '176px');
    });

    it('removes temporary element from the DOM', () => {
      getTextRenderedWidth('yolo swaggins');

      const isTextInDOM = document.body.innerHTML.includes('yolo swaggins');

      return expect(isTextInDOM, false);
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
