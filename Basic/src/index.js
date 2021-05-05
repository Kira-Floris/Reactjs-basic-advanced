import React from "react";
import ReactDom from "react-dom";
import { books } from "./books";
import Book from './book';

import "./styles.css";

function BookList() {
  return (
    <div className="book">
      {books.map((book) => {
        // return <Book title={book.title} detail={book.detail} />;
        // return <Book {...book} key={book.id}></Book>;
        return <Book {...book} key={book.id}></Book>;
      })}
    </div>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
