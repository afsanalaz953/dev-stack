import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Nav'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Body from './components/Body'
import { ToastContainer } from 'react-toastify'

const usersFetch = async() =>{
const response = await fetch("/public/data.json")
const data = await response.json()
return data
}

const usersPromise =  usersFetch();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <Navbar />
   <Banner />
    <ToastContainer position="top-right" autoClose={2000} theme="colored" />
   <Body  usersPromise={usersPromise} />
   <Footer />
  </StrictMode>,
)
