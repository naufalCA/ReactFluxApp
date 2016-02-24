"use strict";
var React = require('react');

var TextInput = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.string,
    errors: React.PropTypes.string
  },

  render: function(){
    var wrapperClass = "form-group";
    if(this.props.errors && this.props.errors.lenght > 0){
      wrapperClass += " has-error";
    }
    return (
      <div className={wrapperClass}>
        <div className="field">
          <label htmlFor={this.props.name}>{this.props.label}</label>
          <input name={this.props.name} type="text"
          placeholder={this.props.placeholder}
          className="form-control"
          ref={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}/>
          <div className="input">{this.props.errors}</div>
        </div>
      </div>
    );
  }
});

module.exports = TextInput;
