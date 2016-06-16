import Ember from 'ember';

export default Ember.Controller.extend({
  isAnswering(){
    return true;
  },
  actions: {
    submit(newAnswer){
      var question = this.get('model');
      var answer = this.store.createRecord('answer', {
        content: newAnswer
      });

      question.get('answers').addObject(answer);
      answer.save();
      
//      this.get('model').get('answers').addObject(this.store.createRecord('answer', {
  //      content: newAnswer
    //  }));

  //    this.get('model').save();

      this.set('isAnswering', false);
    }
  }
});
