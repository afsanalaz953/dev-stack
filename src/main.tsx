import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Nav'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Body from './components/Body'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <Navbar />
   <Banner />
   <Body />
   <Footer />
  </StrictMode>,
)
