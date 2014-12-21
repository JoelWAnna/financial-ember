import Ember from 'ember';

export default Ember.Controller.extend({
 foobar : false,
 date: function()
 {
  var date = this.get('model.date');
  if (date) {
  return date;
  //  return date.format('YYYY-MM-DD');
  }
 }.property('model.date'),
 total: function(){
 return 1; 
 }.property(),
 actions : {
  edit : function () {
   this.set('foobar', true);
  },
  save : function (model) {
   this.set('foobar', false);
    if (!model)
    {
    model = this.get('model');
    }
    model.save();
  }
 }
});
