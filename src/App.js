import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {
  state = {
    books : []
  }

  componentDidMount() {
    this.getAllBooks()
  }

  getAllBooks() {
    BooksAPI.getAll().then( (books) => {
      this.setState({books})
      //console.log(this.state.books)
    })
  }

  changeShelf(book, shelf) {
    //console.log(`ID: ${id}. Value: ${value}`)

    // Added code as suggested in code review
    if (book.shelf !== shelf) {
      BooksAPI.update(book, shelf).then( (res) => {
        //console.log(res)
        book.shelf = shelf

        this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat([ book ])
        }))
      })
    }
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={ () => (
          <ListBooks
            books={this.state.books}
            changeShelf={(book, shelf) => {
              this.changeShelf(book, shelf)
            }}
          />
        )} />
        <Route path="/search" render={ () => (
          <SearchPage
            component={SearchPage}
            books={this.state.books}
            changeShelf={(book, shelf) => {
              this.changeShelf(book, shelf)
            }}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
