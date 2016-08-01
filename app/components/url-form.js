import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  originalUrl: '',
  lengthenedUrl: false,
  actions: {
    onSubmit() {
      this.get('onSubmit')(this.originalUrl);
    }
  }
});
