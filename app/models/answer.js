import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  content: attr('string'),
  voteCount: attr('number'),
  voteScore: attr('number'),
  question: belongsTo('question'),
  approved: attr('boolean'),
  comments: hasMany('comment')
});
