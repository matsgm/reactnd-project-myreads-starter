import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {
  // TODO: When component did mount, BooksAPI.getall

  state = {
    books : []
  }

  componentDidMount() {
    this.getAllBooks()
  }

  getAllBooks() {
    BooksAPI.getAll().then( (books) => {
      this.setState({books})
      console.log(this.state.books)
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={ () => (
          <ListBooks
            books={this.state.books}
            changeShelf={(id, value) => {
              console.log(`ID: ${id}. Value: ${value}`)
              BooksAPI.update(id, value).then( (res) => {
                console.log(res)
                this.getAllBooks()
              })
            }}
          />
        )} />
        <Route path="/search" component={SearchPage} />
      </div>
    )
  }
}

export default BooksApp
