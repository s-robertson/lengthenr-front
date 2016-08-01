import DS from 'ember-data';

export default DS.Model.extend({
  hash: DS.attr(),
  original: DS.attr(),
  longCode: DS.attr()
});
