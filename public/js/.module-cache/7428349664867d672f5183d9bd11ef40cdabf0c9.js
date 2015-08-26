/* eslint func-names: 0, object-shorthand: 0, react/react-in-jsx-scope: 0, no-unused-vars: 0 */

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

var CommentList = React.createClass({displayName: "CommentList",
  function() {
    return (
      React.createElement("div", {className: "commentForm"}, 
        "Hello, world! I am a CommentList."
      )
    );
  }
});

var CommentForm = React.createClass({displayName: "CommentForm",
  function() {
    return (
      React.createElement("div", {className: "commentForm"}, 
        "Hello, world! I am a CommentForm."
      )
    );
  }
});

React.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);
