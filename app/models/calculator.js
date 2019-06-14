import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  firstNumber: DS.attr('number'),
  secondNumber: DS.attr('number'),
  currentNumber: DS.attr('number'),
  operand: DS.attr('string'),
  status: DS.attr('string'),
  result: DS.attr('number'),

  add: function(a, b) { return a + b; },
  subtract: function(a, b) { return a - b; },
  multiply: function(a, b) { return a * b; },
  divide: function(a, b) { return a / b; }
});
