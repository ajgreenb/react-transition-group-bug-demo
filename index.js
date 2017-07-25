var React = require('react');
var CSSTransitionGroup = require('react-transition-group').CSSTransitionGroup;

module.exports = function Demo() {
  return React.createElement(
    CSSTransitionGroup,
    {
      transitionName: 'demo',
      transitionEnterTimeout: 300,
      transitionLeaveTimeout: 300,
    },
    'This is a test.'
  );
}
