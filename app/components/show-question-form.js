import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit(question){
      this.attrs.submit(question);
    }
  }
});
