import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
  host: "http://question-iq.herokuapp.com/",
  namespace: "api/v1"
});
