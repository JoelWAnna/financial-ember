import Ember from 'ember';

var IndexRoute = Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('accounts');
  }
});
export default IndexRoute;