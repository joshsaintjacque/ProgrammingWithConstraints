import { describe, it, expect, addOptionToSelect } from "./specSupport.js";
import {
  randomize,
  setLocationPath,
  initializeApplicationState,
  populateFields,
  setFieldLinkURL,
  onToggle,
  initializeLockButton,
  initializeUnlockButton,
  buildPlatformLabel,
  onDelete,
  onRestore,
  removeValueFromSelect,
  onAdd
} from "./main.js";

describe("Main", () => {
  describe("randomize()", () => {
    it("changes select box values", () => {
      document
        .querySelectorAll("select")
        .forEach(select => (select.value = undefined));

      randomize();

      const numberOfSelectsWithValuesSet = Array.from(
        document.querySelectorAll("select")
      ).filter(select => select.value).length;

      return expect(numberOfSelectsWithValuesSet).toBe(4);
    });
  });

  describe("initializeApplicationState()", () => {
    describe("when the state already exists", () => {
      it("does not overwrite the existing state", () => {
        localStorage.setItem(
          "state",
          JSON.stringify({ fields: {}, projects: [{ name: "test state" }] })
        );

        initializeApplicationState();

        const newState = JSON.parse(localStorage.getItem("state"));
        return expect(newState.projects[0].name).toBe("test state");
      });
    });

    describe("when the state does not exist", () => {
      it("persists the initial state to local storage", () => {
        localStorage.clear();

        initializeApplicationState();

        const newState = JSON.parse(localStorage.getItem("state"));
        return expect(newState.languages[0].name).toBe("Any Language");
      });
    });
  });

  describe("setLocationPath()", () => {
    it("sets the path based on the selected options", () => {
      const select = document.querySelector("#project");
      const option = "Cheesy Double Beef Burrito";
      addOptionToSelect({ select, option });
      select.value = option;

      setLocationPath();

      return expect(window.location.search).toContain(
        "project=Cheesy+Double+Beef+Burrito"
      );
    });

    describe("populateFields()", () => {
      it("loads options from state into the constraint fields", () => {
        // Arrange - remove existing options from one of the fields
        const select = document.querySelector("#platform");
        Array.from(select.options).forEach(option =>
          select.removeChild(option)
        );

        // Act
        populateFields();

        // Assert
        return expect(
          document.querySelector("#platform").options.length
        ).toBeGreaterThan(0);
      });
    });
  });

  describe("setFieldLinkURL()", () => {
    it("shows the field link", () => {
      setFieldLinkURL("project", "Calculator");
      const link = document.querySelector(
        ".constraint__details[data-field=project] a"
      );

      return expect(Array.from(link.classList)).notToContain("hidden");
    });

    it("sets the field link href", () => {
      setFieldLinkURL("project", "Calculator");
      const link = document.querySelector(
        ".constraint__details[data-field=project] a"
      );

      return expect(link.href).toBe(
        "https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Calculator-App.md"
      );
    });
  });

  describe("onToggle()", () => {
    describe("when the details are collapsed", () => {
      const toggleButton = document.querySelector(
        ".details__toggle[data-field=project]"
      );
      const details = document.querySelector(
        `.constraint__details[data-field=project`
      );

      onToggle({ target: toggleButton });

      it("adds the expanded class", () => {
        return expect(Array.from(details.classList)).toContain(
          "constraint__details--expanded"
        );
      });

      it("removes the collapsed class", () => {
        return expect(Array.from(details.classList)).notToContain(
          "constraint__details--collapsed"
        );
      });

      it("switches the toggle state", () => {
        return expect(Array.from(toggleButton.classList)).toContain(
          "details__toggle--expanded"
        );
      });
    });

    describe("when the details are expanded", () => {
      const toggleButton = document.querySelector(
        ".details__toggle[data-field=project]"
      );
      const details = document.querySelector(
        `.constraint__details[data-field=project`
      );

      onToggle({ target: toggleButton });

      it("removes the expanded class", () => {
        return expect(Array.from(details.classList)).notToContain(
          "constraint__details--expanded"
        );
      });

      it("adds the collapsed class", () => {
        return expect(Array.from(details.classList)).toContain(
          "constraint__details--collapsed"
        );
      });

      it("switches the toggle state", () => {
        return expect(Array.from(toggleButton.classList)).notToContain(
          "details__toggle--expanded"
        );
      });
    });
  });
  describe("initializeLockButton()", () => {
    const lockButton = document.querySelector(
      `.constraint__details[data-field=language] .button__lock`
    );
    const unlockButton = document.querySelector(
      `.constraint__details[data-field=language] .button__unlock`
    );

    initializeLockButton("language");

    it("hides the lock button", () => {
      return expect(Array.from(lockButton.classList)).toContain("hidden");
    });

    it("shows the unlock button", () => {
      return expect(Array.from(unlockButton.classList)).notToContain("hidden");
    });
  });

  describe("initializeUnlockButton()", () => {
    const lockButton = document.querySelector(
      `.constraint__details[data-field=platform] .button__lock`
    );
    const unlockButton = document.querySelector(
      `.constraint__details[data-field=platform] .button__unlock`
    );

    initializeUnlockButton("platform");

    it("hides the unlock button", () => {
      return expect(Array.from(unlockButton.classList)).toContain("hidden");
    });

    it("shows the lock button", () => {
      return expect(Array.from(lockButton.classList)).notToContain("hidden");
    });
  });

  describe("buildPlatformLabel()", () => {
    describe("when the platform select value starts with a vowel", () => {
      it('uses the "an" indefinite article', () => {
        const label = document.querySelector("label[for=platform]");
        const select = document.querySelector("select#platform");
        select.value = "iOS App";

        buildPlatformLabel();

        return expect(label.innerText).toBe("as an:");
      });
    });

    describe("when the platform select value starts with a consonant", () => {
      it('uses the "a" indefinite article', () => {
        const label = document.querySelector("label[for=platform]");
        const select = document.querySelector("select#platform");
        select.value = "Browser Extension";

        buildPlatformLabel();

        return expect(label.innerText).toBe("as a:");
      });
    });
  });

  describe("onAdd()", () => {
    const select = document.querySelector("select#language");
    const addButton = document.querySelector(
      ".button__add[data-field=language]"
    );

    onAdd({ target: addButton });

    it("adds the option to state", () => {
      const state = JSON.parse(localStorage.getItem("state"));

      return expect(state.languages.map(lang => lang.name)).toContain(
        "A text value entered in a prompt"
      );
    });

    it("adds the option to the select box and selects it", () => {
      return expect(select.value).toBe("A text value entered in a prompt");
    });

    describe("when adding a value that already exists", () => {
      onAdd({ target: addButton });
      onAdd({ target: addButton });

      it("does not add the option to state again", () => {
        const state = JSON.parse(localStorage.getItem("state"));
        const languagesFound = state.languages
          .map(lang => lang.name)
          .filter(lang => lang === "A text value entered in a prompt");

        return expect(languagesFound.length).toBe(1);
      });

      it("does not add the option to the select box again", () => {
        const options = Array.from(select.options).filter(
          option => option.value === "A text value entered in a prompt"
        );

        return expect(options.length).toBe(1);
      });
    });
  });

  describe("onDelete()", () => {
    const select = document.querySelector("select#language");
    select.value = "Go";
    const deleteButton = document.querySelector(
      ".button__delete[data-field=language]"
    );

    onDelete({ target: deleteButton });

    it("removes the option from state", () => {
      const state = JSON.parse(localStorage.getItem("state"));

      return expect(
        state.languages.filter(lang => lang.isActive).map(lang => lang.name)
      ).notToContain("Go");
    });

    it("removes the option from the select box", () => {
      return expect(select.value).notToBe("Go");
    });
  });

  describe("onRestore()", () => {
    const getState = () => JSON.parse(localStorage.getItem("state"));
    const restoreButton = document.querySelector(
      ".button__restore[data-field=language]"
    );
    const select = document.querySelector("select#language");

    describe("when options have been previously deleted", () => {
      const newLanguages = [
        ...getState().languages.filter(lang => lang.name !== "Ruby")
      ];
      const newState = JSON.stringify({ ...getState, languages: newLanguages });
      localStorage.setItem("state", newState);
      removeValueFromSelect(select, "Ruby");

      onRestore({ target: restoreButton });

      it("restores them to state", () => {
        return expect(getState().languages.map(lang => lang.name)).toContain(
          "Ruby"
        );
      });

      it("restores them to the select", () => {
        const options = Array.from(select.options).map(option => option.value);

        return expect(options).toContain("Ruby");
      });
    });

    describe("when new options have been added", () => {
      const newLanguages = [
        ...getState().languages,
        { name: "Cheesy Double Beef Burrito" }
      ];
      const newState = JSON.stringify({ ...getState, languages: newLanguages });
      localStorage.setItem("state", newState);
      addOptionToSelect({ option: "Cheesy Double Beef Burrito", select });

      onRestore({ target: restoreButton });
      it("removes them from state", () => {
        return expect(getState().languages.map(lang => lang.name)).notToContain(
          "Cheesy Double Beef Burrito"
        );
      });

      it("removes them from the select", () => {
        const options = Array.from(select.options).map(option => option.value);

        return expect(options).notToContain("Cheesy Double Beef Burrito");
      });
    });
  });
});
