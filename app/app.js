import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'financial-test', // TODO: loaded via config
  Resolver: Resolver
  //this.store.fetchAll('account');
});

loadInitializers(App, 'financial-test');

export default App;
