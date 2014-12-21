import Ember from 'ember';
import DS from 'ember-data';

export default Ember.ArrayController.extend({
needs:['account'],
  itemController: 'transaction',
  account_id:  DS.belongsTo('account', {async: false}),
  
/* transaction: function(){
  
  }.property(),*/
 actions : {
 newTransaction: function(){
 var transaction = this.store.createRecord('transaction', {fromAccount: this.get('account_id')});
 this.get('transactions').insertAt(0, transaction);
 
 }
 
 }
});
