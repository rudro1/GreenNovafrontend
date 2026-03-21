import React from 'react';
import { useLoaderData } from 'react-router';
import coffeebg from '/Users/rudro/Desktop/restart/mile-10/module56/greennova/src/assets/more/11.png';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import Back from '../home/Back/Back';
const Coffeedetails = () => {
    const product= useLoaderData();
    console.log(product);

//     Category
// : 
// "Americano"
// Chef
// : 
// " Mr. Moruti"
// Details
// : 
// "Espresso with hot water"
// Supplier
// : 
// "Cappu Authorizer"
// Taste
// : 
// "Sweet and hot "
// image
// : 
// "https://i.ibb.co/DPMMB7Kc/Decaf-Coffee.png"
// name
// : 
// "Decaf Coffee"
// price
// : 
// "890"
// _id
// : 
// "69bbde15d3bf8d9fdbbb9113"

    return (


   <div className=' '>

 
       <div className='w-full flex flex-col  relative min-h-screen py-5 px-5  md:py-20 bg-[#ffffff] md:px-20'>
 
        <div className='absolute w-full h-full  top-0 z-5 '>
<img src={coffeebg} alt="" />
        </div> 

<div className=' z-10  w-12/12 md:w-10/12 mx-auto!'>
<Back></Back>

    <div className="flex flex-col  items-center  md:items-center md:flex-row md:justify-between gap-10 md:py-16 md:px-10 bg-[#f4f3f1]  shadow-sm rounded-lg">
    <div className='w-full md:w-1/2'>
          <figure className='w-full flex justify-center  '>
            <img
                className='max-h-[450px]  object-cover' // হুবহু সাইজ পেতে এটি দিন
                src={product.image}
                alt={product.name} 
            />
          </figure>
    </div>
    
    <div className="raleway w-full md:w-1/2 text-black space-y-3  flex flex-col items-stretch md:items-start  ">
        <h2 className='rancho-regular coffetitle text-4xl mb-5! font-extrabold! text-[#331A15]'>{product.Taste}</h2>
        {/* এখানে বাকি সব ডাটা আগের মতো থাকবে */}
        <p className='text-xl releway font-light'><span className='font-bold'>Name:</span> {product.name}</p>
        <p className='text-xl  releway font-light'><span className='font-bold'>Chef:</span> {product.Chef}</p>
        <p className='text-xl  releway font-light'><span className='font-bold'>Category:</span> {product.Category}</p>
        <p className='text-xl  releway font-light'><span className='font-bold'>Supplier:</span> {product.Supplier}</p>
        <p className='text-xl  releway font-light'><span className='font-bold'>Supplier:</span> {product.Details}</p>
        <p className='text-xl  releway font-light pb-3!'><span className='font-bold'>Price:</span> {product.price} Taka</p>
      <button className='btn border-2  hover:border-[#331A15] hover:bg-[#331A15] hover:text-white bg-transparent text-[#331A15] border-[#331A15] rancho-regular text-xl px-8 transition-all duration-300 shadow-md active:scale-95 w-full md:w-fit mt-5'>
    Buy Now
</button>
    </div>
</div>
</div>
      </div>
   </div>
    );
};

export default Coffeedetails;