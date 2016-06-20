import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index');
  this.route('questions', function(){
    this.route('question', {path: ':question_id'})
  })
});

export default Router;
