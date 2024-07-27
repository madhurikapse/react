import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{height:"70px",width:"100",backgroundColor:"black" ,color:"white",display:"flex",gap:"860px",textAlign:"center",textDecoration:'underline'}}>
      <Link style={{color:"white"}} to="/">Home</Link>
      <Link style={{color:"white"}} to="/add">Add Book</Link>
    </nav>
  );
};

export default Navbar;
