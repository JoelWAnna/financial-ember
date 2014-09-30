import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
  this.controllerFor('transactions').set('account_id', params.account_id)
  return this.store.find('transaction', { account_id: params.account_id});
  }

});
