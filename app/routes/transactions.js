import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var self = this;
    this.store.find('account', params.account_id).then(
      function(found){
        self.controllerFor('transactions').set('account_id', found);
      }
    );
    
    return this.store.find('transaction', { account_id: params.account_id});
  }

});
