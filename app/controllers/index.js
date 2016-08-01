import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    lengthenUrl(original) {
      this.model.set('original', original);
      this.model.save().then(() => console.log('done saving'));
    }
  }
});
