import React from "react";
import BookCard from "./BookCard";
import { Book } from "lucide-react";

interface Props {
  title: string;
  books: Book[];
  ContainerClassName: string;
}

function BookList({ title, books, ContainerClassName }: Props) {
  return (
    <section className={ContainerClassName}>
      <h2 className="font-bebas-neue text-4xl  text-light-100">{title}</h2>
      <ul className="book-list">
        {books.map((book) => (
          <BookCard key={book.title} {...book} />
        ))}
      </ul>
    </section>
  );
}

export default BookList;
