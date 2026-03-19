import React from 'react';
import Logo from '../Logo/Logo';
const Footer = () => {
    return (

        <div className='bg-[#f7f7f7] flex flex-col items-center'>
     <footer className=" w-9/12 mx-auto flex flex-row justify-between p-10">
  <nav className='w-1/2 flex flex-col space-y-5'>
    <h6 className="footer-title"><Logo change={'flex-col'}></Logo></h6>
    <p className='raleway font-normal text-xl text-[#1B1A1A]'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
<div className='flex flex-col md:flex-row gap-5 text-black '>
        <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
</div>

<div className='flex flex-col '>
    <p className='rancho-regular coffetitle text-2xl'>Get in Touch</p>

    <ul className="menu bg-base-200 rounded-box w-56">
  <li>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
      Item 2
    </a>
  </li>
  <li>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      Item 1
    </a>
  </li>
  <li>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
      Item 3
    </a>
  </li>
</ul>
</div>
  </nav>
 
<div className='pt-10'>
      <form>
        <p className='rancho-regular coffetitle text-2xl'>Get in Touch</p>
  
   <div className='flex flex-col gap-5'>

     <fieldset className="w-80 text-black raleway font-bold">
    
      <div className="">
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered  bg-white" />

      </div>
    </fieldset>
     <fieldset className="w-80 text-black raleway font-bold">

      <div className="">
        <input
          type="text"
          placeholder="Enter your email address"
          className="input input-bordered  bg-white" />

      </div>
    </fieldset>


 <fieldset className="w-80 text-black raleway font-bold">
    
      <div className="">
        <input
          type="text"
          placeholder="message"
          className="input input-bordered  bg-white" />

      </div>
    </fieldset>

 <fieldset className="w-80 text-black raleway font-bold">
    
      <div className="">
        <input
          type="sybmit"
      value={'add message'}
          className="btn btn-need  bg-white" />

      </div>
    </fieldset>
   </div>
  </form>
</div>


</footer>
 <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
        </div>
   
    );
};

export default Footer;