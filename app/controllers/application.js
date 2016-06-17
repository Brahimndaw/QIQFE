import Ember from 'ember';

export default Ember.Controller.extend({
  isAnswering(){
    return true;
  },
  actions: {
    submit(newAnswer){

      var question = this.get('currentQ');

      var answer = { attributes:
        { content: newAnswer,
        question_id: question.data.id }
      }

      question.included.addObject(answer);
      this.set('answers', question.included);

      const requestOptions = {
        url: "http://localhost:3000/api/v1/answers",
        type: 'POST',
        data: JSON.stringify(answer),
        contentType: 'application/json',
        dataType: 'json'
      };

      $.ajax(requestOptions).then((response) => {
        this.set('isAnswering', false);
      })
    },
    getQuestion(){
      const requestOptions = {
        url: "http://localhost:3000/api/v1/random",
        type: 'GET',
        contentType: 'application/json',
        dataType: 'json'
      };

     $.ajax(requestOptions).then((response) => {
        var currentQ = response
        this.set('currentQ', currentQ);
        this.set('isAnswering', true);
      })
    }
  }
});
