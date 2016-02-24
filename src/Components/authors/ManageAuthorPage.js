"use strict";
var React = require('react');
var AuthorForm = require('./AuthorForm');
var ManageAuthorPage = React.createClass({
  getInitialState: function(){
    return {
      author: {id: '', firstName: '', lastName: ''}
    };
  },
  _setAuthorState: function(event){
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value;
    return this.setState({author: this.state.author});
  },
  render: function(){
    return (
      <div id="author-container">
        <h1>Manage Authors</h1>
        <AuthorForm author={this.state.author} onChange={this._setAuthorState}/>
      </div>
    );
  }
});

module.exports = ManageAuthorPage;
