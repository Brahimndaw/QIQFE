import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    getQuestion(){
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
    }
  }
});
