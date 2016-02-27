"use strict";
var React = require('react');
var TextInput = require('../common/TextInput');
var AuthorForm = React.createClass({
  propTypes: {
    author: React.PropTypes.object.isRequired,
    _saveAuthor: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    errors: React.PropTypes.object
  },
  componentWillMount: function(){
    console.log(this.props);
  },
  render: function(){
    return (
        <form id="authorForm">
            <TextInput
              name="firstName"
              label="First Name"
              value={this.props.author.firstName}
              onChange={this.props.onChange}
              errors={this.props.errors.firstName}/>
            <br/>
            <TextInput
              name="lastName"
              label="Last Name"
              value={this.props.author.lastName}
              onChange={this.props.onChange}
              errors={this.props.errors.lastName}/>
            <br/>
            <input type="submit" value="Save" className="btn btn-default" onClick={this.props._saveAuthor}/>
        </form>
    );
  }
});

module.exports = AuthorForm;
