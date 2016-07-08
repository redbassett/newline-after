'use babel';

import NewlineAfterView from './newline-after-view';
import { CompositeDisposable } from 'atom';

export default {

  newlineAfterView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.newlineAfterView = new NewlineAfterView(state.newlineAfterViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.newlineAfterView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'newline-after:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.newlineAfterView.destroy();
  },

  serialize() {
    return {
      newlineAfterViewState: this.newlineAfterView.serialize()
    };
  },

  toggle() {
    console.log('NewlineAfter was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
