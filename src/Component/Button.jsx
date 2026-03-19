import React from 'react';

const Button = ({value}) => {
    return (
     <input type="submit" className='btn bg-[#d2b48c] text-[#331a15] text-xl w-full' value={value}/>
    );
};

export default Button;