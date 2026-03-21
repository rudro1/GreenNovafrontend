import React from 'react';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
const Back = () => {
    return (
     <div className='mb-8!'>
    <Link 
        to={'/'} 
        className='group flex items-center gap-2 w-fit mb-8! px-4 py-2 rounded-lg transition-all duration-300 hover:bg-[#D2B48C] hover:shadow-md'
    >
        <ArrowLeft 
            size={24}
            className='text-[#331A15] transition-transform duration-300 group-hover:-translate-x-1' 
        />
        <span className='rancho-regular text-2xl text-[#331A15] drop-shadow-sm'>
            Back to home
        </span>
    </Link>
</div>
    );
};

export default Back;