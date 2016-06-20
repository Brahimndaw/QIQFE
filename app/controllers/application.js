import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    getQuestion(){
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

















  // isAnswering(){
  //   return true;
  // },
  // actions: {
  //   submit(newAnswer){
  //     let question = this.get('currentQ')
  //     let answer = this.store.createRecord('answer', {question: question, content: newAnswer})
  //     answer.save().then((newAnswer)=>{
  //       this.set('isAnswering', false);
  //       this.set('userAnswer', newAnswer.get('content'));
  //       var answersArrayLength = question.get('answers').content.length
  //       this.set('answers', question.get('answers').content.slice(0, answersArrayLength - 1));
  //     })
  //   },
  //   getQuestion(){
  //     const requestOptions = {
  //       url: "http://localhost:3000/api/v1/random",
  //       type: 'GET',
  //       contentType: 'application/json',
  //       dataType: 'json'
  //     };
  //
  //      $.ajax(requestOptions).then((response) => {
  //        debugger;
  //        let attrs = attrs = {id: response.data.id, content: response.data.attributes.content}
  //        let question = this.store.createRecord('question', attrs)
  //       //  Object {content: "sdafdsa", vote-count: 0, vote-score: 0, question-id: 9}
  //       var answers = []
  //       for (var i = 0; i < response.included.length; i++) {
  //         attrs = {id: response.included[i].id, content: response.included[i].attributes.content, voteCount: response.included[i].attributes["vote-count"], voteScore: response.included[i].attributes["vote-score"], question: question}
  //         let answer = this.store.createRecord('answer', attrs)
  //         answers.pushObject(answer)
  //       }
  //       question.set('answers', answers)
  //         // var answers = []
  //         //
  //         // if(response.included){
  //         //
  //         //   for (var i = 0; i < response.included.length; i++){
  //         //     answers.pushObject(this.store.createRecord('answer',
  //         //     { content: response.included[i].attributes.content,
  //         //       vote_count: response.included[i].attributes['vote-count'],
  //         //       vote_score: response.included[i].attributes['vote-score'],
  //         //       answer_id: response.included[i].id}
  //         //     ))
  //         //   }
  //         // }
  //
  //         var currentQ = this.store.createRecord('question',
  //         { id: response.data.id ,
  //           content: response.data.attributes.content, answers: answers
  //         })
  //
  //         this.set('currentQ', currentQ);
  //         this.set('question', currentQ.get('content'))
  //         this.set('isAnswering', true);
  //       })
  //     },
  //     upVote(answer){
  //       debugger;
  //       answer.incrementProperty('voteCount');
  //       debugger;
  //       answer.update();
  //       // let answer = this.store.findRecord('answer', id).then(function(response){
  //       //   debugger;
  //       //   response.incrementProperty('vote_count')
  //       //   response.save()
  //       // });
  //       //
  //       // for(var i = 0; i < this.answers.length; i++){
  //       //   if(this.answers[i].id == id){
  //       //     this.answers[i].set('vote_count', 99)
  //       //   }
  //       // }
  //     }
  //   }
});
