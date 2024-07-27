import React from 'react';
import BookList from '../components/BookList';

const HomePage = () => {
  return (
    <div style={{margin:"auto",textAlign:"center"}}>
      <h1>Welcome to Book Collection</h1>
      <BookList />
    </div>
  );
};

export default HomePage;
