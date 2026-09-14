import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
// import Navbar from './components/Nav'
// import Banner from './components/Banner'
// import Footer from './components/Footer'
// import Body from './components/Body'
// import { ToastContainer } from 'react-toastify'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <App />
  </StrictMode>,
)
