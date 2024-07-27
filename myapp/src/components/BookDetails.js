// src/components/BookDetails.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const BookDetails = () => {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/books/${id}`)
      .then(response => setBook(response.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Published Year:</strong> {book.publishedYear}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      {book.summary && <p><strong>Summary:</strong> {book.summary}</p>}
      <Link to={`/edit/${book._id}`}>Edit</Link>
      <br />
      <Link to="/">Back to List</Link>
    </div>
  );
};

export default BookDetails;
