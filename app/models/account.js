import DS from 'ember-data';

var Account = DS.Model.extend({
  accountId : DS.attr('number'),
  name : DS.attr('string'),
  type:  DS.attr('string'),
  interest: DS.attr('number'),
  budget: DS.attr('number'),
  start: DS.attr('number'),
  transactions: DS.hasMany('transaction', {async: true, inverse: 'fromAccountId', key: 'id'})
 });

Account.reopenClass({
 FIXTURES : [{
   id : 1,
   accountId : '1',
   name : 'fpp'
  }, {
   id : 2,
   accountId : '2',
   name : 'a'
  },
 ]
});

export default Account;
