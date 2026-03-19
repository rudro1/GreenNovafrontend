import React from 'react';
import { Link } from 'react-router';
const Logo = ({change}) => {
    return (

                 <Link to={'/'} className={`flex items-center ${change ? `md:${change} items-start gap-y-2`: 'md:flex-row ' } flex-col  justify-center`}> <img src="https://i.ibb.co.com/WWTksPDF/logo1.png" className='w-15' alt="logo1" border="0"></img> <p>Aroma Artisan</p> </Link>
            
    );
};

export default Logo;