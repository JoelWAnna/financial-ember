import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
  /*
  actions: {
    error: function () {
      this.transitionTo('catchall', "application-error");
    }
  }*/
});

Router.map(function() {
  //this.resource('accounts', {path: '/'});
  this.resource('account', {path: 'account/:account_id'});
  this.resource('transaction', {path: 'transaction/:transaction_id'});
  this.resource('transactions', {path: 'transactions/:account_id'});
  this.resource('accounttypes', {path: '/accounttypes'});
  this.resource('accounts', function()
  {
  });
});

export default Router;
