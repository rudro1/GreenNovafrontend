import React from 'react';
import Productcard from './Productcard';
import backgroundimg from '/Users/rudro/Desktop/restart/mile-10/module56/greennova/src/assets/more/1.png';

const Ourproducts = ({products}) => {
    console.log(products)
    return (
               <div className={`flex flex-col items-center relative z-10 bg-[#ffffff] py-5 md:py-10 `}>
 
<div className='absolute top-10 h-full  md:bottom-10  z-5 '>
     <img src={backgroundimg} className='h-full object-contain' alt="" />
</div>
        <div className='w-12/12 md:w-9/12 '>
       
           <div className='flex flex-col justify-center items-center  text-center'>
             <p className='text-[#1B1A1A] text-xl releway font-normal'>--- Sip & Savor ---</p>
            <p className='coffetitle  rancho-regular text-[#374151] font-extrabold text-3xl md:text-4xl leading-tight'>Our Popular Products</p>
         <button className='btn btn-artisan w-fit rancho-regular text-xl mt-2!'>
    Add Coffee
</button>
           </div>

      
              <div className=' grid grid-cols-1 lg:grid-cols-2 gap-5 text-black py-5 md:py-10'>
            {
                products.map(product=> <Productcard key={product._id} product={product}></Productcard>)
            }
           
           </div>
         </div>
        </div>
    );
};

export default Ourproducts;