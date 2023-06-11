//import './App.css';
import { useState, useEffect } from 'react';

import BookForm from './BookForm';
import BookTable from './BookTable';
import LibraryService from '../../services/library-service';
import { Book } from '../../models/book';

export default function LibraryPage(props) {
  // Declare a new State variable
  // React hook used managing component state
  const [books, setBooks] = useState([]);
  const [bookToEdit, setBookToEdit] = useState(null);
  
  const [loading, setLoading] = useState(false);


  useEffect(
    () => {
      if (!books.length) {
        onInitialLoad();
      }
    },

    // In the case of an empty array, the function only fires the first time the
    // component initializes

    // If we put a variable reference and that variable changes
    // this function fires again
    []
  );

  async function onInitialLoad() {
    // We try catch here if there is an error
    // We can show that error to the user
    setLoading(true);
    try {
      const books = await LibraryService.fetchBooks();
      setBooks(books.filter((book) => book.userId === props.user.uid));
    } catch (err) {
      // TODO: handle error correctly
      console.log(err);
    }
    setLoading(false);
  }

  function onBookEdit(book) {
    setBookToEdit(book);
    onBookRemove(book);
  }

  
  async function onBookCreate(book) {
    
    setBookToEdit(null);
    const storedBook = await LibraryService.createBook(new Book(book.title, book.author, book.isbn, null, props.user.uid));
    setBooks([...books, storedBook]);
  
  }

  async function onBookRemove(book) {

    let bookId = null;
    for (let i=0; i<books.length; i++) {
        if (books[i].isbn == book.isbn) {
          bookId = books[i].id;
        }
    }
    
    await LibraryService.deleteBook(bookId);

    // update the tasks state with the filtered tasks
    setBooks(books.filter((book) => book.id !== bookId));

  }

  return (
    <div className="text-center m-5">
      <div className="card p-4">
        <BookForm
          bookToEdit={bookToEdit}
          onBookCreated={onBookCreate}
        ></BookForm>
        <BookTable
          books={books}
          loading={loading}
          onBookEdit= {onBookEdit}
          onBookRemove={onBookRemove}
        ></BookTable>
      </div>
    </div>
  );
}

