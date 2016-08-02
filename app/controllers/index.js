import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    lengthenUrl(original) {
      let checkUrl = function (url) {
        let checkedUrl = url;

        if (url.search(/http:\/\/|https:\/\//) !== 0) {
          checkedUrl = 'http://' + checkedUrl;
        }

        return checkedUrl;
      };

      const checkedUrl = checkUrl(original);

      if (this.model.get('original') !== checkedUrl) {
        this.set('model', this.get('store').createRecord('url', {}));
        this.model.set('id', null);
        this.model.set('original', checkedUrl);
        this.model.save();
      }
    }
  }
});
