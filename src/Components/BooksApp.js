import React from "react";
import * as BooksAPI from "../BooksAPI";
import "../App.css";
import { Route, Switch } from "react-router-dom";
import SearchBooks from "./SearchBooks";
import ShowShelves from "./ShowShelves";
import NotFound from "./NotFound";

class BooksApp extends React.Component {
  state = {
    booksCollection: []
  };

  componentDidMount() {
    // TODO: get collection of books

    BooksAPI.getAll().then(books => {
      this.setState({
        booksCollection: books
      });
    });
  }

  //TODO: delete book from shelf

  deleteBook = (book, shelf) => {
    this.setState(state => {
      const books = state.booksCollection.filter(b => {
        return b.id !== book.id;
      });
      return {
        booksCollection: books
      };
    });
  };

  // TODO: move books between shelves

  updateShelf = (book, shelf) => {
    if (shelf === "none") {
      this.deleteBook(book, shelf);
    }

    BooksAPI.update(book, shelf).then(response => {
      this.setState(state => {
        const books = state.booksCollection.map(b => {
          if (b.id === book.id) {
            b.shelf = shelf;
            return b;
          } else {
            return b;
          }
        });
        return {
          booksCollection: books
        };
      });
    });
  };

  //TODO : add book to shelf

  addBook = (book, shelf) => {
    book.shelf = shelf;
    BooksAPI.update(book, shelf).then(response => {
      this.setState(state => {
        const listBooks = state.booksCollection.concat(book);
        return {
          booksCollection: listBooks
        };
      });
    });
  };

  render() {
    //console.log(this.state.booksCollection);

    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path="/search"
            render={() => (
              <SearchBooks
                handleSearchPage={this.handleSearchPage}
                listBooks={this.state.booksCollection}
                addBook={this.addBook}
              />
            )}
          ></Route>

          <Route
            exact
            path="/"
            render={() => (
              <ShowShelves
                listBooks={this.state.booksCollection}
                updateShelf={this.updateShelf}
              />
            )}
          ></Route>

          <Route component={NotFound}></Route>
        </Switch>
      </div>
    );
  }
}
export default BooksApp;
