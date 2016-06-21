import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
  host: "https://question-iq.herokuapp.com",
//  host: "http://localhost:3000",
  namespace: "api/v1"
});
