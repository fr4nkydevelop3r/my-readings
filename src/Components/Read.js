import React from "react";
import "../App.css";
import ListBooks from "./ListBooks";
class Read extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <ListBooks
          books={this.props.listBooks}
          updateShelf={this.props.updateShelf}
          action="updateBook"
        />
      </div>
    );
  }
}

export default Read;
