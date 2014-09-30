import DS from 'ember-data';

var AccountType = DS.Model.extend({
  name : DS.attr('string'),
  accounts : DS.hasMany('accounts', {async:true, key: 'name'})
 });

export default AccountType;
