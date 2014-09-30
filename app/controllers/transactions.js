import Ember from 'ember';

export default Ember.ArrayController.extend({
  itemController: 'transaction',
  account_id: false,
 actions : {
 newTransaction: function(){
 var transaction = this.store.createRecord('transaction', {fromAccount: this.get('account_id')});
 this.get('transactions').insertAt(0, transaction);
 
 }
 
 }
});
