import Ember from 'ember';

export default Ember.Controller.extend({
  isAnswering(){
    return true;
  },
  actions: {
    submit(params){
      debugger
      this.store.get('answer').createRecord('answer', {
        content: "spock"
      });
      this.get('model').save();
      this.set('isAnswering', false);
    }
  }
});
