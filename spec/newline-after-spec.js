'use babel';

import NewlineAfter from '../lib/newline-after';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('NewlineAfter', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('newline-after');
  });

  describe('when the newline-after:insert-newline is fired', () => {
    it('adds a newline after the cursor', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.newline-after')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'newline-after:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.newline-after')).toExist();

        let newlineAfterElement = workspaceElement.querySelector('.newline-after');
        expect(newlineAfterElement).toExist();

        let newlineAfterPanel = atom.workspace.panelForItem(newlineAfterElement);
        expect(newlineAfterPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'newline-after:toggle');
        expect(newlineAfterPanel.isVisible()).toBe(false);
      });
    });
  });
});
