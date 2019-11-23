import React from "react";
import { withRouter } from "react-router-dom";
import CurrentlyReading from "./CurrentlyReading";
import WantToRead from "./WantToRead";
import Read from "./Read";

class ShowShelves extends React.Component {
  goSearch = path => {
    this.props.history.push(path);
  };

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.props.listBooks.length > 0 ? (
              <div>
                <CurrentlyReading
                  listBooks={this.props.listBooks.filter(item => {
                    return item.shelf === "currentlyReading";
                  })}
                  updateShelf={this.props.updateShelf}
                />

                <WantToRead
                  listBooks={this.props.listBooks.filter(item => {
                    return item.shelf === "wantToRead";
                  })}
                  updateShelf={this.props.updateShelf}
                />

                <Read
                  listBooks={this.props.listBooks.filter(item => {
                    return item.shelf === "read";
                  })}
                  updateShelf={this.props.updateShelf}
                />
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>

        <div className="open-search">
          <button onClick={() => this.goSearch("/search")}>Add a book</button>
        </div>
      </div>
    );
  }
}

export default withRouter(ShowShelves);
