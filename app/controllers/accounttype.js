import Ember from 'ember';

export default Ember.Controller.extend({
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
