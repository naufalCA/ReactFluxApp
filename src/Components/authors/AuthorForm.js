"use strict";
var React = require('react');
var TextInput = require('../common/TextInput');
var AuthorForm = React.createClass({
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
              onChange={this.props.onChange}/>
            <br/>
            <TextInput
              name="lastName"
              label="Last Name"
              value={this.props.author.lastName}
              onChange={this.props.onChange}/>
            <br/>
            <input type="submit" value="Save" className="btn btn-default"/>
        </form>
    );
  }
});

module.exports = AuthorForm;
