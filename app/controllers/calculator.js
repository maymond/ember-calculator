import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    numberPress(num) {
      if(num === '.' && document.querySelector('.calculator-screen').value.indexOf('.') != -1) {
        return false;
      }

      if((this.model.get('status') === 'first' || this.model.get('status') === 'second') && num !== '.') {
        document.querySelector('.calculator-screen').value = num;
      } else {
        document.querySelector('.calculator-screen').value += num;
      }
      this.model.setProperties({'currentNumber': num, 'status': 'transition'});
    },
    actionPress(action) {
      this.model.setProperties({'firstNumber': document.querySelector('.calculator-screen').value,
                                'operand': action, 'status': 'second'});
    },
    clearPress() {
      document.querySelector('.calculator-screen').value = '0';
      this.model.setProperties({'firstNumber': 0, 'secondNumber': 0, 'currentNumber': 0,
                                'operand': '', 'status': 'first', 'result': 0});
    },
    calculateResult() {
      if(this.model.get('firstNumber') === 0 || this.model.get('status') === 'complete') {
        return false;
      }

      this.model.setProperties({'secondNumber': document.querySelector('.calculator-screen').value});
      let operand = this.model.get('operand');
      let action = this.model.get(operand);
      let result = action(parseFloat(this.model.get('firstNumber')), parseFloat(this.model.get('secondNumber')));
      document.querySelector('.calculator-screen').value = result;
      this.model.setProperties({'result': result, 'status': 'complete', 'firstNumber': result});
    },
    themeSelect() {
      this.transitionToRoute('theme');
    }
  }
});
