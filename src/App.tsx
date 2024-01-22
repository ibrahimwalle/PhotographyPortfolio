import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Portfolio from './pages/portfolio'
import About from './pages/about'
import Contact from './pages/contact'
import Navbar from './components/navbar'
import Footer from './components/footer';

import './App.css'

function App() {

  return (
    
    <BrowserRouter>
        <div className="App dark:bg-black bg-white h-screen text-black dark:text-white px-5 md:px-20 animate-fade-in transition duration-500">
          <Navbar/>
          <Routes>
            <Route path='/' element={<Portfolio/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
          </Routes>
          <Footer/>
        </div>
    </BrowserRouter>
  )
}

export default App
