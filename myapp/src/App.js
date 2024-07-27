import React from 'react';
import {  Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import BookDetails from './components/BookDetails';
import HomePage from './pages/HomePage';
import AddBookPage from './pages/AddBookPage';
import EditBookPage from './pages/EditBookPage';
import BookDetailsPage from './pages/BookDetailsPage';

const App = () => {
  return (
    <div>
      <Navbar/>
    <Routes>
   
        <Route path="/" element={<HomePage/>} />
        <Route path="/edit/:id" element={<EditBookPage/>} />
        <Route path="/book/:id" element={<BookDetailsPage/>} />
        <Route path='BookList' element={<BookList/>}></Route>
        <Route path='BookForm' element={<BookForm/>}></Route>
        <Route path='BookList' element= {<BookList/>}></Route>
        <Route path='BookDetails' element={<BookDetails/>}></Route>
        <Route path='/add' element={<AddBookPage/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
