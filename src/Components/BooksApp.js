import React from 'react';
import * as BooksAPI from '../BooksAPI';
import '../App.css';
import CurrentlyReading from './CurrentlyReading';
import WantToRead from './WantToRead';
import Read from './Read';
import SearchBooks from './SearchBooks';

class BooksApp extends React.Component {
    state = {
        booksCollection: [],
        showSearchPage : false      
    }


  componentDidMount(){
    
    // TODO: get collection of books

    BooksAPI.getAll()
        .then((books) => {
            this.setState({
                booksCollection: books
            });
        })
    
  }    

  handleSearchPage = () => {
      this.setState({
        showSearchPage : false
      });
  }


  render() {

    console.log(this.state.booksCollection);

    return (
        <div className="app">
        {this.state.showSearchPage ? (
            <SearchBooks 
            handleSearchPage={this.handleSearchPage}
            />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
              <CurrentlyReading 
                listBooks={this.state.booksCollection.filter((item) => {
                    return item.shelf === 'currentlyReading'
                })}
              />

               <WantToRead 
                    listBooks={this.state.booksCollection.filter((item) => {
                        return item.shelf === 'wantToRead'
                    })}
               />  

               <Read 
                listBooks={this.state.booksCollection.filter((item) => {
                    return item.shelf === 'read'
                })}
               />


              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }

}
export default BooksApp;