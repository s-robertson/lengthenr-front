import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('url-form', 'Integration | Component | url form', {
  integration: true
});

test('should display the url form', function(assert) {
  this.render(hbs`{{url-form}}`);
  assert.equal(this.$('#lengthen-url-form-container').length, 1, 'rendered form container');
  assert.equal(this.$('#lengthen-url-form-container input.input-url').length, 1, 'rendered url input');
  assert.equal(this.$('#lengthen-url-form-container button[type="submit"]').length, 1, 'rendered submit button');
});

test('should display a lengthened url', function(assert) {
  this.set('model', {
    id: 1,
    original: 'http://www.google.ca',
    longCode: '13981390ads90das098das890131231321312',
  });

  this.set('externalAction', (actual) => {
    let expected = 'http://www.google.ca';
    assert.deepEqual(actual, expected, 'original url is submitted');
  });

  this.render(hbs`{{url-form url=model onSubmit=(action externalAction)}}`);

  assert.equal(this.$('#lengthened-result').length, 1, 'rendered lengthened url result');
});
