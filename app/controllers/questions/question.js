import Ember from 'ember';

export default Ember.Controller.extend({
  isAnswering: true,
  actions: {
    submit(newAnswer){
      let answer = this.store.createRecord('answer', {content: newAnswer, voteCount: 0, voteScore: 0})
      answer.set('question', this.get('model'))
      answer.save()
      this.toggleProperty('isAnswering')
      this.set('userAnswer', answer)
      let arrayLength =  this.get('model').get('answers').content.length
      let modelFetch =  this.get('model').get('answers').content.slice(0, arrayLength -1)
      this.set('answers', modelFetch)  
    },
    upVote(answer){
      answer.incrementProperty('voteCount')
      answer.incrementProperty('voteScore')
      answer.save();
    }, 
    downVote(answer) {
      answer.incrementProperty('voteCount')
      answer.decrementProperty('voteScore')
      answer.save();
    }
  }
})
