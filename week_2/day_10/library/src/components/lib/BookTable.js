import React from 'react';
import Spinner from '../common/Spinner';

export default function BookTable(props) {
  return (
    <div>
      {props.loading ? ( 
      <Spinner extraClass="mt-5" variant="primary"></Spinner>
      ) : (
        <div> 
              <table className="table mt-5">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className = "bg-light" id="table-body">
          {props.books.map((book) => {
            return (
              <tr key={book.isbn}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>
                  <button
                    className="btn btn-outline-danger btn-sm m-1"
                    onClick={() => props.onBookRemove(book)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-outline-warning btn-sm m-1"
                    onClick={() => props.onBookEdit(book)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>


        </div>


      )}
    </div>
  );
}
