import Ember from 'ember';

export default Ember.Controller.extend({

 isOne : function () {
  return this.get('model.id') === "1";
 }.property('model.id'),
 /*,
 transactions: function(){
 this.get('model.transactions').then(function() {
 return this.get('model.transactions');
 });
 }.property('model.id')*/
 actions : {
  save : function (model) {
    if (!model)
    {
    model = this.get('model');
    }
    model.save();
  // this.store.find('account', this.get('model.id')).then(function (account) {
   //  account.save();
   // });
   }
  }
 });
