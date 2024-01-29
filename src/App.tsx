import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Portfolio from './pages/portfolio'
import About from './pages/about'
import Contact from './pages/contact'
import Admin from './pages/admin'
import Navbar from './components/navbar'
import Footer from './components/footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { QueryClient, QueryClientProvider } from 'react-query'


import './App.css'

function App() {

  const queryClient = new QueryClient()

  return (
    
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div className="App dark:bg-black bg-white h-screen text-black dark:text-white px-5 md:px-20 animate-fade-in transition duration-500">
          <Navbar/>
          <Routes>
            <Route path='/' element={<Portfolio/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
          </Routes>
          <Footer/>
          <ToastContainer/>
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
