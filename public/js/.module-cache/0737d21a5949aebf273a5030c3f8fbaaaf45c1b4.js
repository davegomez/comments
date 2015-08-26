/* eslint func-names: 0, object-shorthand: 0 */

var React = require('react');
var PropTypes = React.PropTypes;

var CommentBox = React.createClass({displayName: "CommentBox",

  render: function() {
    return (
      React.createElement("div", {className: "commentBox"}, 
        "Hello, world! I am a CommentBox."
      )
    );
  }

});

React.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);
