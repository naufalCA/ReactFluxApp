"use strict";
var React = require('react');
var Router = require('react-router');
var Toastr = require('toastr');
var AuthorForm = require('./AuthorForm');
var AuthorApi = require('../../api/authorApi');
var ManageAuthorPage = React.createClass({
  mixins: [
    Router.Navigation
  ],
  statics: {
    willTransitionFrom: function(transition, component){
      if(this.state.dirty && !confirm('You want to leave this page')){
        transition.abort();
      }
    }
  },
  getInitialState: function(){
    return {
      author: {id: '', firstName: '', lastName: ''},
      errors: {},
      dirty: false
    };
  },
  _setAuthorState: function(event){
    this.setState({dirty: true});
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value;
    return this.setState({author: this.state.author});
  },
  _isValidForm: function(){
    var validForm = true;
    this.state.errors = {};

    if(this.state.author.firstName.length < 3){
      this.state.errors.firstName = 'The first name should have at least 3 characters';
      validForm = false;
    }

    if(this.state.author.lastName.length < 3){
      this.state.errors.lastName = 'The last name should have at least 3 characters';
      validForm = false;
    }
    this.setState({errors: this.state.errors});
  },
  _saveAuthor: function(event){
    event.preventDefault();
    if(!this._isValidForm()){
      return;
    }
    AuthorApi.saveAuthor(this.state.author);
    this.setState({dirty: false});
    Toastr.success('Author added successfully');
    this.transitionTo('authors');
  },
  componentWillMount: function(){
    var authorId = this.props.params.id;
    if(authorId){
      this.setState({author: AuthorApi.getAuthorById(authorId)});
    }
  },
  render: function(){
    return (
      <div id="author-container">
        <h1>Manage Authors</h1>
        <AuthorForm author={this.state.author}
                    onChange={this._setAuthorState}
                    _saveAuthor={this._saveAuthor}
                    errors= {this.state.errors}/>
      </div>
    );
  }
});

module.exports = ManageAuthorPage;
