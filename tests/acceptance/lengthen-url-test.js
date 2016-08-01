import { test } from 'qunit';
import moduleForAcceptance from 'lengthenr/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | homepage');

test('should have a lengthenr form and logo', assert => {
  visit('/');
  andThen(() => {
    assert.equal(find('h1#logo').length, 1, 'should have the logo');
    assert.equal(find('#lengthen-url-form-container').length, 1, 'should have a form container');
    assert.equal(find('#lengthen-url-form-container input.input-url').length, 1, 'should have a URL input');
    assert.equal(find('#lengthen-url-form-container button[type="submit"]').length, 1, 'should have a submit button');
  });
});

test('should lengthen a URL', assert => {
  visit('/');
  fillIn('#lengthen-url-form-container input.input-url', 'http://www.google.ca');
  click('#lengthen-url-form-container button[type="submit"]');
  andThen(() => {
    assert.equal(find('#lengthened-result').length, 1, 'has a lengthened URL result');
  });
});
