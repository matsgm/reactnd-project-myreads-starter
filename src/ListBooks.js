import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'

class ListBooks extends Component {
  static PropTypes = {
    books: PropTypes.array.isRequired
  }

  handleChange(id, value) {
    if (this.props.changeShelf)
        this.props.changeShelf(id, value)
  }

  render() {
    // TODO: Make component of 'bookshelf'

    const { books } = this.props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books.filter( (books) => { return books.shelf === "currentlyReading" })
                        .map( (books) => {
                          return (
                            <Book
                              book={books}
                              key={books.id}
                              changeShelf={(id, value) => {
                                this.handleChange(id, value)
                              }}
                            />
                          )
                        })
                  }
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books.filter( (books) => { return books.shelf === "wantToRead" })
                        .map( (books) => {
                          return (
                            <Book
                              book={books}
                              key={books.id}
                              changeShelf={(id, value) => {
                                this.handleChange(id, value)
                              }}
                            />
                          )
                        })
                  }
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books.filter( (books) => { return books.shelf === "read" })
                        .map( (books) => {
                          return (
                            <Book
                              book={books}
                              key={books.id}
                              changeShelf={(id, value) => {
                                this.handleChange(id, value)
                              }}
                            />
                          )
                        })
                  }
                </ol>
              </div>
            </div>
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