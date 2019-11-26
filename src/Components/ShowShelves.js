import React from "react";
import { withRouter } from "react-router-dom";
import CurrentlyReading from "./CurrentlyReading";
import WantToRead from "./WantToRead";
import Read from "./Read";

function ShowShelves(props) {
  const goSearch = path => {
    props.history.push(path);
  };

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {props.listBooks.length > 0 ? (
            <div>
              <CurrentlyReading
                listBooks={props.listBooks.filter(item => {
                  return item.shelf === "currentlyReading";
                })}
                updateShelf={props.updateShelf}
              />

              <WantToRead
                listBooks={props.listBooks.filter(item => {
                  return item.shelf === "wantToRead";
                })}
                updateShelf={props.updateShelf}
              />

              <Read
                listBooks={props.listBooks.filter(item => {
                  return item.shelf === "read";
                })}
                updateShelf={props.updateShelf}
              />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>

      <div className="open-search">
        <button onClick={() => goSearch("/search")}>Add a book</button>
      </div>
    </div>
  );
}

export default withRouter(ShowShelves);
