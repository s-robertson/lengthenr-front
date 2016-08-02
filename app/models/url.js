import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  hash: DS.attr(),
  original: DS.attr(),
  originalHash: DS.attr(),
  lengthened: DS.attr(),
  lengthenedHash: DS.attr(),
  lengthenedUrl: Ember.computed('lengthened', function() {
    let lengthened;

    if (lengthened = this.get('lengthened')) {
      return `http://${window.location.hostname}/r/${this.get('lengthened')}`;
    }
    else {
      return false;
    }
  })
});
