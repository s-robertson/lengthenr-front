import { test } from 'qunit';
import moduleForAcceptance from 'lengthenr/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | homepage');

test('should have a lengthenr form and logo', assert => {
  visit('/');
  andThen(() => {
    assert.equal(find('h1#logo').length, 1, 'should have the logo');
    assert.equal(find('form.lengthenr-form').length, 1, 'should have a form');
    assert.equal(find('.lengthenr-form input[name="url"]').length, 1, 'should have a URL input');
    assert.equal(find('.lengthenr-form button[type="submit"]').length, 1, 'should have a submit button');
  });
});

test('should lengthen a URL', assert => {
  visit('/');
  fillIn('.lengthenr-form input[name="url"]', 'http://www.google.ca');
  click('.lengthenr-form button[type="submit"]');
  andThen(() => {
    assert.equal(find('#lengthened-url').length, 1, 'has a lengthened URL');
  });
});
