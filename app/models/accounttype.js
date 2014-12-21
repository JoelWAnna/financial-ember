import DS from 'ember-data';

var AccountType = DS.Model.extend({
  name : DS.attr('string'),
  account : DS.hasMany('account', {async:true, key: 'id', embedded:false})
 });

export default AccountType;
