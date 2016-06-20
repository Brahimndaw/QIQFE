import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit(answer){
      this.attrs.submit(answer);
    }
  }
});
