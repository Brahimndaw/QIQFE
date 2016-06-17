import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  content: attr('string'),
  vote_count: attr('number'),
  vote_score: attr('number'),
  question: belongsTo('question')
});
