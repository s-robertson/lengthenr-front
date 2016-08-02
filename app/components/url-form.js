import Ember from 'ember';

export default Ember.Component.extend({
  originalUrl: '',
  actions: {
    onSubmit() {
      this.get('onSubmit')(this.originalUrl);
    }
  }
});
