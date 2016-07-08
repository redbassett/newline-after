'use babel';

import { CompositeDisposable, Point, Range } from 'atom';

export default {
  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'newline-after:insert-newline': () => this.insert_newline()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  serialize() {
    return {
      newlineAfterViewState: this.newlineAfterView.serialize()
    };
  },

  insert_newline() {
    const editor = atom.workspace.getActiveTextEditor();
    const cursors = editor.getCursorBufferPositions();

    for (var cursor of cursors) {
      editor.setTextInBufferRange(new Range(cursor, cursor), '\n');
    }

    // Move all cursors back to their original places
    editor.moveToBeginningOfLine();
    editor.moveLeft();
  }

};
