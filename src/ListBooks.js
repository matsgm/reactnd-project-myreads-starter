import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'

class ListBooks extends Component {
  static PropTypes = {
    books: PropTypes.array.isRequired
  }

  handleChange(book, shelf) {
    if (this.props.changeShelf)
        this.props.changeShelf(book, shelf)
  }

  render() {
    const { books } = this.props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf
              bookshelfTitle='Currently Reading'
              booksInShelf={books.filter( (books) => {
                return books.shelf === 'currentlyReading'
              })}
              changeShelf={(book, shelf) => {
                this.handleChange(book, shelf)
              }}
            />
            <Bookshelf
              bookshelfTitle='Want to read'
              booksInShelf={books.filter( (books) => {
                return books.shelf === 'wantToRead'
              })}
              changeShelf={(book, shelf) => {
                this.handleChange(book, shelf)
              }}
            />
            <Bookshelf
              bookshelfTitle='Read'
              booksInShelf={books.filter( (books) => {
                return books.shelf === 'read'
              })}
              changeShelf={(book, shelf) => {
                this.handleChange(book, shelf)
              }}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks