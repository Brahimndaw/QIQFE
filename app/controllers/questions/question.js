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
      Ember.$('#up-'+answer.id).addClass('hidden')
      Ember.$('#down-'+answer.id).addClass('hidden')

      answer.save();
    },
    downVote(answer) {
      answer.incrementProperty('voteCount')
      answer.decrementProperty('voteScore')
      Ember.$('#up-'+answer.id).addClass('hidden')
      Ember.$('#down-'+answer.id).addClass('hidden')

      answer.save();
    },
    getQuestion(){
      this.set('isAnswering', true)

      const requestOptions = {
            url: "http://localhost:3000/api/v1/random",
            type: 'GET',
            contentType: 'application/json',
            dataType: 'json'
          };
      $.ajax(requestOptions).then((response) => {
        this.transitionToRoute('questions.question', response.id)
      })
    }
  }
})
