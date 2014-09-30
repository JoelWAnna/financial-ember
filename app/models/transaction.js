import DS from 'ember-data';

export default DS.Model.extend({
  description : DS.attr('string'),
  fromAccountId:  DS.belongsTo('account', {async: false}),
  toAccountId: DS.belongsTo('account', {async: false}),
  amount: DS.attr('number'),
  date: DS.attr('date'),
 });
