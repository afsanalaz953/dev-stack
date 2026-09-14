
import { useState } from "react";
import Navbar from './components/Nav';
import Banner from './components/Banner';
import { ToastContainer } from 'react-toastify';
import Body from './components/Body';
import Footer from './components/Footer';
import type { IProducts } from './types';
import { Suspense } from 'react';

const usersFetch = async() =>{
const response = await fetch("/data.json")
const data = await response.json()
return data
}

const usersPromise =  usersFetch();



const App = () => {
 const [stack, setStack] = useState<IProducts[]>([])

    return (
        <div>
            <Navbar />
   <Banner />
    <ToastContainer position="top-right" autoClose={2000} theme="colored" />
    <Suspense fallback ={<div>Loading...</div>}>
   <Body  usersPromise={usersPromise} 
   stack={stack} 
   setStack = {setStack} 
   />
   </Suspense>
   <Footer />
            
        </div>
    );
};

export default App;