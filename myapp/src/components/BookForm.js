// src/components/BookForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const BookForm = ({ isEditing }) => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    publishedYear: '',
    genre: '',
    summary: ''
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (isEditing) {
      axios.get(`/books/${id}`)
        .then(response => setBook(response.data))
        .catch(err => console.log(err));
    }
  }, [id, isEditing]);

  const handleChange = e => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isEditing) {
      axios.put(`/books/${id}`, book)
        .then(() => navigate('/'))
        .catch(err => console.log(err));
    } else {
      axios.post('/books', book)
        .then(() => navigate('/'))
        .catch(err => console.log(err));
    }
  };

  return (
    <div style={{backgroundColor:"gray"}}>
    <form style={{margin:"auto",height:"400px",width:"300px",border:"1px solid"}} onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={book.title}
        onChange={handleChange}
        placeholder="Title"
        required
      /><br></br>
      <br></br>
      <input
        type="text"
        name="author"
        value={book.author}
        onChange={handleChange}
        placeholder="Author"
        required
      /><br></br>
      <br></br>
      <input
        type="number"
        name="publishedYear"
        value={book.publishedYear}
        onChange={handleChange}
        placeholder="Published Year"
        required
      /><br></br>
      <br></br>
      <input
        type="text"
        name="genre"
        value={book.genre}
        onChange={handleChange}
        placeholder="Genre"
        required
      /><br></br>
      <br></br>
      <textarea
        name="summary"
        value={book.summary}
        onChange={handleChange}
        placeholder="Summary"
      />
      <br></br>
      <br></br>
      <button type="submit">{isEditing ? 'Update' : 'Add'} Book</button>
    </form>
    </div>
  );
};

export default BookForm;
