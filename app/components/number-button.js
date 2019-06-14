import Component from '@ember/component';

export default Component.extend({
  tagName:'',
  actions: {
    buttonPress() {
      document.querySelector('.calculator-screen').value += this.get('num');
    }
  }
});
