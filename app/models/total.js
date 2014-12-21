import DS from 'ember-data';

var Total = DS.Model.extend({
  accountId : DS.belongsTo('account'),
  total : DS.attr('number')

  
 });

export default Total;
