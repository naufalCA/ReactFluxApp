"use strict";
var React = require('react');

var AuthorsList = React.createClass({
  propTypes: {
    authors: React.propTypes.array.isRequired
  },
  render: function(){
     var createAuthorRow = function(author){
       return (<tr key={author.id}>
                  <td>
                    <a href={"/#authors/" + author.id}>{author.id}</a>
                  </td>
                  <td>
                    {author.firstName}{" "}{author.lastName}
                  </td>
              </tr>
            );
     };
      return (
        <table className='table table-responsibe'>
            <thead>
              <th>Identificator</th>
              <th>Name</th>
            </thead>
            <tbody>
                {this.props.authors.map(createAuthorRow, this)}
            </tbody>
        </table>
      );
  }
});

module.exports = AuthorsList;
