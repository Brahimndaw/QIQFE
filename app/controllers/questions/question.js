import Ember from 'ember';

export default Ember.Controller.extend({
  isAnswering: true,
  actions: {
    submit(newAnswer){
      debugger;
      let answer = this.store.createRecord('answer', {content: newAnswer})
      answer.set('question', this.get('model'))
      answer.save()
      this.toggleProperty('isAnswering')
    }
  }
})
