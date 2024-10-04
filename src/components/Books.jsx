/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import React, { useEffect, useState } from "react";
import BookList from "./BookList/BookList";
import axios from "axios";

function Books() {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    axios(`${import.meta.env.VITE_API_BASE_URL}/api/books`)
      .then((data) => {
        console.log(data.data.books);
        setBookData(data.data.books);
      })

      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <BookList />
    </div>
  );
}

export default Books;
