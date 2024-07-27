import axios from 'axios';

const API_URL = 'http://localhost:5000/books';

const getAllBooks = () => axios.get(API_URL);
const getBook = (id) => axios.get(`${API_URL}/${id}`);
const createBook = (book) => axios.post(API_URL, book);
const updateBook = (id, book) => axios.put(`${API_URL}/${id}`, book);
const deleteBook = (id) => axios.delete(`${API_URL}/${id}`);

const BookService = {
  getAllBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook
};

export default BookService;
