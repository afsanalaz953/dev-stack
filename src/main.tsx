import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Nav'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Body from './components/Body'

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
   <Body  usersPromise={usersPromise} />
   <Footer />
  </StrictMode>,
)
