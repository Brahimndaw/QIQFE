import JSONAPISerializer from 'ember-data/serializers/json-api';

import EmbeddedRecordsMixin from 'ember-data/serializers/embedded-records-mixin';

export default JSONAPISerializer.extend(EmbeddedRecordsMixin, {
  attrs: {
    question: {embedded: 'always'}
  }
});
