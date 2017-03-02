'use babel';

import CodewalkerView from './codewalker-view';
import { CompositeDisposable } from 'atom';
import gitproxy from './gitproxy';

export default {

  codewalkerView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.codewalkerView = new CodewalkerView(state.codewalkerViewState);
    this.modalPanel = atom.workspace.addBottomPanel({
    //this.modalPanel = atom.workspace.addModalPanel({
      item: this.codewalkerView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'codewalker:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.codewalkerView.destroy();
  },

  serialize() {
    return {
      codewalkerViewState: this.codewalkerView.serialize()
    };
  },

  toggle() {

    gitproxy.runGit(result => console.log(result));

    //console.log('Codewalker was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  },

};
