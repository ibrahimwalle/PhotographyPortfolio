import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import Portfolio from './pages/portfolio'
import About from './pages/about'
import Contact from './pages/contact'
import Navbar from './components/navbar'
import Footer from './components/footer';


{/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Signika:wght@400;700&display=swap" rel="stylesheet"> */}

import './App.css'

function App() {

  return (
    
    <HashRouter>
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
    </HashRouter>
  )
}

export default App
