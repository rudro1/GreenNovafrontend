import React from 'react';
 import {Eye,Pen,Trash} from 'lucide-react'
 import { Link } from 'react-router';
import Swal from 'sweetalert2';
const Productcard = ({product,handledelete}) => {


    return (
     <div className="flex flex-row justify-between gap-5 w-full z-15  py-10 px-5 bg-[#f5f4f2] items-center  shadow-sm  ">
<div>
      <figure className=''>
    <img
    className='h-40 w-full object-cover'
      src={product.image}
      alt={product.name} />
  </figure>
</div>
  <div className=" w-[60%] md:w-[60%] raleway font-light  ">
    <p className='text-lg'>
        <span className='font-bold w-15 inline-block'>
            Name:
        </span>
        <span>
             {product.name}
        </span>
    </p>
    <p className='text-lg'>
        <span className='font-bold w-15 inline-block'>
            Chef:
        </span>
        <span>
             {product.Chef}
        </span>
    </p>


     <p className='text-lg'>
        <span className='font-bold w-15 inline-block'>
            Price:
        </span>
        <span>
             {product.price} Taka
        </span>
    </p>
  </div>

<div className="flex justify-end w-[10%] md:w-[20%]">
    <div className="w-full flex flex-col items-end gap-y-3">
        
        {/* View Button */}
        <Link to={`/Coffeedetails/${product._id}`} className="group btn btn-square border-none bg-[#D2B48C] hover:bg-[#b89a74]">
            <Eye 
                size={20} 
                color="white" 
                className="transition-transform duration-300 group-hover:[transform:scale(1.25)_rotate(12deg)]" 
            />
        </Link>

        {/* Edit Button */}
      <Link to={`/updatecoffee/${product._id}`} className="group btn btn-square border-none bg-[#3C393B] hover:bg-[#2a282a]">
            <Pen 
                size={18} 
                color="white" 
                className="transition-transform duration-300 group-hover:[transform:scale(1.25)_rotate(-12deg)]" 
            />
     </Link>

        {/* Delete Button */}
        <Link onClick={()=>handledelete(product._id)} className="group btn btn-square border-none bg-[#EA4744] hover:bg-[#c43a37]">
            <Trash 
                size={20} 
                color="white" 
                className="transition-transform duration-300 group-hover:animate-bounce" 
            />
        </Link>

    </div>
</div>
</div>
    );
};

export default Productcard;

