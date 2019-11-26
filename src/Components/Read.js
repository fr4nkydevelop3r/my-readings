import React from "react";
import "../App.css";
import ListBooks from "./ListBooks";
function Read(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Read</h2>
      <ListBooks
        books={props.listBooks}
        updateShelf={props.updateShelf}
        action="updateBook"
      />
    </div>
  );
}

export default Read;
