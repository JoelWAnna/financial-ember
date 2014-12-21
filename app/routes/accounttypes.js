import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
  return this.store.findAll('accounttype', params.account_name);
  }
/*  transactions: function(params)
  {
    return this.store.find('transaction', params.account_id);
  },* /
  accounts: function()
  {
  //  return this.store.fetchAll('accounts').get('id');
  }*/
});
