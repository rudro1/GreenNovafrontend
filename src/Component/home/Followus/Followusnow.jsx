import React from 'react';
import cup1 from '/Users/rudro/Desktop/restart/mile-10/module56/greennova/src/assets/cups/Rectangle 9.png'
import cup2 from '/Users/rudro/Desktop/restart/mile-10/module56/greennova/src/assets/cups/Rectangle 10.png'
import cup3 from '/Users/rudro/Desktop/restart/mile-10/module56/greennova/src/assets/cups/Rectangle 11.png'
import cup4 from '/Users/rudro/Desktop/restart/mile-10/module56/greennova/src/assets/cups/Rectangle 12.png'
import cup5 from '/Users/rudro/Desktop/restart/mile-10/module56/greennova/src/assets/cups/Rectangle 13.png'
import cup6 from '/Users/rudro/Desktop/restart/mile-10/module56/greennova/src/assets/cups/Rectangle 14.png'
import cup7 from '/Users/rudro/Desktop/restart/mile-10/module56/greennova/src/assets/cups/Rectangle 15.png'
import cup8 from '/Users/rudro/Desktop/restart/mile-10/module56/greennova/src/assets/cups/Rectangle 16.png'

const Followusnow = () => {
    return (
        <div className='flex flex-col items-center relative z-10 bg-[#ffffff]   py-5 md:py-15 '>
            <div className='flex flex-col justify-center items-center py-10  text-center'>
             <p className='text-[#1B1A1A] text-xl releway font-light'>Follow Us Now</p>
            <p className='coffetitle  rancho-regular text-[#374151] font-extrabold text-3xl md:text-4xl leading-tight'>Follow on Instagram</p>
      
           </div>

           <div className='w-12/12 md:w-9/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
<figure className=''>
    <img
    className=' w-full object-contain'
    src={cup1}
    />
  </figure>



  <figure className=''>
    <img
    className=' w-full object-contain'
    src={cup2}
    />
  </figure>



   <figure className=''>
    <img
    className=' w-full object-contain'
    src={cup3}
    />
  </figure>

   <figure className=''>
    <img
    className=' w-full object-contain'
    src={cup4}
    />
  </figure>

    <figure className=''>
    <img
    className=' w-full object-contain'
    src={cup5}
    />
  </figure>
    <figure className=''>
    <img
    className=' w-full object-contain'
    src={cup6}
    />
  </figure>
    <figure className=''>
    <img
    className=' w-full object-contain'
    src={cup7}
    />
  </figure>
    <figure className=''>
    <img
    className=' w-full object-contain'
    src={cup8}
    />
  </figure>
           </div>
        </div>
    );
};

export default Followusnow;