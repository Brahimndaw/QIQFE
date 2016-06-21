import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  content: attr('string'),
  answers: hasMany('answer'),
  receivedCount: attr('number')
});
