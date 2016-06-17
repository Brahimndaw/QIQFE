import Ember from 'ember';

export default Ember.Controller.extend({
  isAnswering(){
    return true;
  },
  actions: {
    submit(newAnswer){

    var question = this.get('currentQ');

    var answer = {
      content: newAnswer,
      question_id: question.data.id
    }

      question.data.relationships.answers.data.addObject(answer);

      const requestOptions = {
        url: "http://localhost:3000/api/v1/answers",
        type: 'POST',
        data: JSON.stringify(answer),
        contentType: 'application/json',
        dataType: 'json'
      };

     $.ajax(requestOptions)

      this.set('answers', question.data.relationships.answers.data);
      this.set('isAnswering', false);
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
      })
    }
  }
});
