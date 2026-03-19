import React from 'react';
import bannerBg from '../../assets/Coffee/3.png'; 
const Hero = () => {
    return (
        <div 
            className='max-w-full min-h-125 md:h-150 bg-top-left py-20  bg-no-repeat bg-cover  flex flex-col md:flex-row items-center justify-center md:justify-end lg:justify-end'
            style={{ backgroundImage: `url(${bannerBg})` }}
        >
            {/* কন্টেন্ট কন্টেইনার: flex-col দিয়ে ওপর-নিচ সাজানো হয়েছে */}
            {/* <div></div> */}
            <div className='w-full max-w-[90%] md:max-w-4xl md:pl-45   flex flex-col gap-y-4 text-white '>
                <h1 className='rancho-regular text-4xl md:text-4xl leading-tight'>
                    Would you like a Cup of Delicious Coffee?
                </h1>
                <p className='raleway text-lg font-normal opacity-90 max-w-2xl text-body'>
                    It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! 
                    Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
                </p>
                <div>
                 <button className='btn w-full md:w-fit px-8 py-2 
    /* Initial State */
    bg-[#E3B577] text-[#242222] border-2 border-transparent rounded-none
    
    /* Hover State */
    hover:bg-transparent hover:text-white hover:border-white 
    
    /* Smooth Transition */
    transition-all duration-300 ease-in-out
    
    rancho-regular text-2xl'>
    Learn More
</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;