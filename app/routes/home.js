import Ember from 'ember';

export default Ember.Route.extend({
  model(){
  //  var questionId = Math.floor((Math.random() * 30) + 1);
    return this.store.findRecord('question', 2);
  }
});
