var React = require('react');
var shallow = require('enzyme').shallow;
var Demo = require('./');

test('Demo', function () {
  var el = React.createElement(Demo);
  expect(shallow(el)).toMatchSnapshot();
});
