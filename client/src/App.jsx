import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Service from './Pages/Service'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import  Logout  from './Pages/Logout'
import Register from './Pages/Register'
import ErrorPage from './Pages/ErrorPage'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/footer/Footer'
import AdminLayout from './components/Layout/Admin-layout'
import AdminContacts from './Pages/Admin-Contacts'
import AdminUsers from './Pages/Admin-Users'
import AdminEdit from './Pages/Admin-Edit'
import AdminContactEdit from './Pages/Admin-Contact-Edit'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path='/admin' element={<AdminLayout />} > 
        <Route path='users' element={<AdminUsers />} />
        <Route path='users/:id' element={<AdminEdit />}  />
        <Route path='contacts' element={<AdminContacts />} />
        <Route path='contacts/:id' element={<AdminContactEdit />} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>  
    </>
  )
}

export default App
