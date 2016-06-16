import Ember from 'ember';

export default Ember.Controller.extend({
  isAnswering(){
    return true;
  },
  actions: {
    submit(newAnswer){
      this.get('model').get('answers').addObject(this.store.createRecord('answer', {
          content: newAnswer
      }));

      this.set('isAnswering', false);
    }
  }
});
