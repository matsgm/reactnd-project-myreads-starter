import React, { Component } from 'react'

class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});

    if (this.props.changeShelf)
        this.props.changeShelf(this.props.book, event.target.value)
  }

  componentDidMount() {
    if (this.props.book.shelf) this.setState({value: this.props.book.shelf})

    if (this.props.myBooks) {
      let findBook = this.props.myBooks.filter( (b) => {
        return b.id === this.props.book.id
      })
      
      if (findBook.length > 0) {
        //console.log(findBook[0].shelf)
        this.setState({value: findBook[0].shelf})
      }
    }
  }

  render() {
    const { book } = this.props
    
    return (
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>          
    )
  }
}

export default Book