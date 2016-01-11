import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: '/'});

  this.route('errors', function() {
    this.route('list');
    this.route('new');
    this.route('view', {path: '/view/:error_id'});
    this.route('edit', {path: '/edit/:error_id'});
  });

  this.route('family', function() {
    this.route('new');
    this.route('list');
    this.route('view', {path: '/view/:member_id'});
    this.route('edit' , {path: '/edit/:member_id'});
  });
});

export default Router;
