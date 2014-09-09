import Ember from 'ember';

export default Ember.Controller.extend({
  isOne: function()
  {
  debugger;
  return this.get('model.id')==="1";
  }.property('model.id')
});
