import React from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {
  // TODO: When component did mount, BooksAPI.getall

  state = {
    // TODO: Add shelves state
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" component={ListBooks} />
        <Route path="/search" component={SearchPage} />
      </div>
    )
  }
}

export default BooksApp
