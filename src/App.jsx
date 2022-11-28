import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Item1 from './Pages/Item1';
import Item2 from './Pages/Item2';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} /> 
      <Route path='/viamo' element={<Item1 />} /> 
      <Route path='/nebula' element={<Item2 />} /> 
      </Routes>
      <Footer />
    </div>
  )
}

export default App
