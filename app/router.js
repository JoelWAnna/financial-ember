import Ember from 'ember';

var Router = Ember.Router.extend({
  location: FinancialTestENV.locationType
});

Router.map(function() {
  this.resource('account', {path: 'account/:account_id'});
  this.resource('accounts', function()
  {
  });
});

export default Router;
