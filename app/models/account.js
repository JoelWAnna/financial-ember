import DS from 'ember-data';

var Account = DS.Model.extend({
  accountId : DS.attr('number'),
  name : DS.attr('string')
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
