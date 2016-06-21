import Ember from 'ember';

export default Ember.Controller.extend({
  isAnswering: true,
  commentShow: false,
  actions: {
    submit(newAnswer){
      let answer = this.store.createRecord('answer', {content: newAnswer.replace(/\n/g,'<br>'), voteCount: 0, voteScore: 0,
        approved: true })

      answer.set('question', this.get('model'))
      answer.save()

      this.toggleProperty('isAnswering')
      this.set('userAnswer', answer)

      let arrayLength =  this.get('model').get('answers').content.length
      let modelFetch =  this.get('model').get('answers').content.slice(0, arrayLength -1).sortBy('voteCount').reverse()

      this.set('answers', modelFetch)
    },
    submitComment(newComment, answer){
      let comment = this.store.createRecord('comment', {content: newComment.replace(/\n/g,'<br>'), voteCount: 0, voteScore: 0 })
      comment.set('answer', answer)
      comment.save()

      Ember.$(".comment-form textarea").val('');

    },
    upVote(answer){
      answer.incrementProperty('voteCount')
      answer.incrementProperty('voteScore')
      Ember.$('#up-'+answer.id).addClass('hidden')
      Ember.$('#down-'+answer.id).addClass('hidden')

      answer.save();
    },
    downVote(answer) {
      answer.decrementProperty('voteScore')
      answer.incrementProperty('voteCount')

      if(parseInt(answer.get('voteScore')) < -3){
          answer.set('approved', false)
          answer.save()
      }

      Ember.$('#up-'+answer.id).addClass('hidden')
      Ember.$('#down-'+answer.id).addClass('hidden')

      answer.save();
    },
    getQuestion(){
      this.set('isAnswering', true)

      const requestOptions = {
            //url: "https://question-iq.herokuapp.com/api/v1/random",
            url: "http://localhost:3000/api/v1/random",
            type: 'GET',
            contentType: 'application/json',
            dataType: 'json'
          };
      $.ajax(requestOptions).then((response) => {
        this.transitionToRoute('questions.question', response.id)
      })
    },
    incrementReceivedCount(){
      this.get('model').incrementProperty('receivedCount');
      this.get('model').save();
    },
    showComments(){
      this.toggleProperty('commentShow')
    }
  }
})
