"use strict";
var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
    render: function(){
      return (
        <div>
          <h1>Page not found</h1>
          <p>Woops!! there is nothing to see here, please return back to home page.</p>
          <Link to='app'>Back to home</Link>
        </div>
      );
    }
});


module.exports = NotFoundPage;
