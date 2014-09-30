import Ember from 'ember';

export default Ember.Controller.extend({
 foobar : false,
 date: function()
 {
 var date = this.get('model.date');
return;
 console.log(date);
 return date.getYear() + '-' + date.getMonth() + '-' + date.getDay();
 }.property('model.date'),
 actions : {
  edit : function () {
   this.set('foobar', true);
  },
  save : function (model) {
   this.set('foobar', false);
    if (!model)
    {
    debugger;
    model = this.get('model');
    console.log(model)
    }
    model.save();
  }
 }
});
