import React from 'react';
import Home from '../Pages/Home';
import { Outlet } from 'react-router';
import Addcoffee from '../Component/Addcoffee';
import UpdateCoffee from '../Component/UpdateCoffee';
import Navbar from '../Component/home/Navbar';
import Footer from '../Component/home/Footer';
const Mainlayout = () => {
    return (
        <div className='w-full mx-auto min-h-screen'>

              <nav className='stciky top-0'>
                 <Navbar></Navbar>
              </nav>

<div>
  
       
               <Outlet></Outlet>
     
      
</div>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Mainlayout;