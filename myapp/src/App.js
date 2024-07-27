import logo from './logo.svg';
import './App.css' 
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import BookForm from './components/BookForm';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Routes>
      
     <Route path="/" element={<BookForm/>}></Route>
      <Route path="BookForm" element={<BookForm/>}></Route>
      

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
