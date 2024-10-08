/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function SingleBook() {
  const { bookid } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios(`${import.meta.env.VITE_API_BASE_URL}/api/books/${bookid}`)
      .then((data) => {
        console.log(data.data.book);
        setBook(data.data.book);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="single-book-container">
      <h2>{book?.title} </h2>
      <p>{book?.author}</p>
      <img
        src={book?.coverimage}
        alt={`Cover image for ${book?.title} by ${book?.author}`}
      />
      <p>{book?.description}</p>
    </div>
  );
}

export default SingleBook;
