import Ember from 'ember';

export default Ember.Controller.extend({
  isAnswering(){
    return true;
  },
  actions: {
    submit(newAnswer){
      let question = this.get('currentQ')
      // question.save()
      let answer = this.store.createRecord('answer', {question: question, content: newAnswer})
      answer.save()
      this.set('isAnswering', false);
      this.set('userAnswer', answer.get('content'));
      var answersArrayLength = question.get('answers').content.length
      this.set('answers', question.get('answers').content.slice(0, answersArrayLength - 1));

  //     var question = this.get('currentQ');
  //
  //     var answer = { attributes:
  //       { content: newAnswer,
  //       question_id: question.data.id }
  //     }
  //
  // //    question.included.addObject(answer);
  //     this.set('userAnswer', answer.attributes.content);
  //
  //     this.set('answers', question.included);
  //
  //     const requestOptions = {
  //       url: "http://localhost:3000/api/v1/answers",
  //       type: 'POST',
  //       data: JSON.stringify(answer),
  //       contentType: 'application/json',
  //       dataType: 'json'
  //     };
  //
  //     $.ajax(requestOptions).then((response) => {
  //       this.set('isAnswering', false);
  //     })
    },
    getQuestion(){
      const requestOptions = {
        url: "http://localhost:3000/api/v1/random",
        type: 'GET',
        contentType: 'application/json',
        dataType: 'json'
      };

       $.ajax(requestOptions).then((response) => {
          var answers = []

          if(response.included){


            for (var i = 0; i < response.included.length; i++){

              answers.pushObject(this.store.createRecord('answer',
              { content: response.included[i].attributes.content,
                vote_count: response.included[i].attributes['vote-count'],
                vote_score: response.included[i].attributes['vote-score'],
                id: response.included[i].id }
              ))
            }
          }

          var currentQ = this.store.createRecord('question',
          { id: response.data.id ,
            content: response.data.attributes.content, answers: answers
          })

          this.set('currentQ', currentQ);
          this.set('question', currentQ.get('content'))
          this.set('isAnswering', true);
        })
      },
      upVote(answer){
        this.store.findRecord('answer', answer.id).then(function(response){
          debugger
          // var newCount = 9
          response.set('vote_count', newCount)
          response.save()
        //  response.update()
        })
  //      var newCount = parseInt(answer.vote_count) + 1
//        Ember.set(answer, 'vote_count', newCount)
    //    var previousAnswer = this.store.findRecord('answer', parseInt(answer.id))
            //  answer.vote_score++
    //    answer.save();

        //      this.get('controller').get('store').find('answer')
    //    var answer = this.store.findRecord('answer', id)
      }
    }
});
