/* eslint
   func-names: 0,
   object-shorthand: 0,
   react/react-in-jsx-scope: 0,
   no-unused-vars: 0,
   react/prop-types: 0,
   react/no-danger: 0 */

var PropTypes = React.PropTypes;

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className='commentBox'>
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
      <div className='commentForm'>
        <Comment author='Pete Hunt'>This is one comment</Comment>
        <Comment author='Jordan Walke'>This is *another* comment</Comment>
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className='commentForm'>
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

var Comment = React.createClass({
  render: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return (
      <div className='comment'>
        <h2 className='commentAuthor'>
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
});

React.render(
  <CommentBox />,
  document.getElementById('content')
);
