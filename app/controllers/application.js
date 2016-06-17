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
      this.set('answers', question.get('answers').content);

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

  //      var answers = response.included.map(function(item) {
  //        return this.store.createRecord('answer', { content: item.content });
  //      });
        var currentQ = this.store.createRecord('question', { id: response.data.id ,
        content: response.data.attributes.content /*, answers: answers */ })
        debugger
        this.set('currentQ', currentQ);
        this.set('question', currentQ.get('content'))
        this.set('isAnswering', true);
      })
    }
  }
});
