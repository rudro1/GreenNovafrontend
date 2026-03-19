import React from 'react';
import { Link } from 'react-router';
import Logo from '../Logo/Logo';
const Navbar = () => {
    return (
  
      

        <nav className='h-30 flex w-full   items-center relative justify-center bg-center bg-repeat-x  bg-[url(/Users/rudro/Desktop/restart/mile-10/module56/greennova/src/assets/Coffee/15.jpg)] '>

{/* <div className="absolute inset-0 bg-black/30"></div> */}
        <div className="text-3xl md:text-5xl w-fit  mx-auto z-10 font-bold text-[#FFFFFF] tracking-widest uppercase italic rancho-regular">
         <Logo></Logo>

                </div>
          
        </nav>
    );
};
        



export default Navbar;