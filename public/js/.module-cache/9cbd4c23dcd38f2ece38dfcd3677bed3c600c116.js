/* eslint func-names: 0, object-shorthand: 0, react/react-in-jsx-scope: 0 */

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
