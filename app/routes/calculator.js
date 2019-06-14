import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord('calculator', {
      firstNumber: 0,
      secondNumber: 0,
      currentNumber: 0,
      operand: '',
      status: 'first',
      result: 0
    });
  }
});
