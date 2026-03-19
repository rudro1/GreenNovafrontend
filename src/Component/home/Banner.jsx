import React from 'react';
// ইমেজটি আগে ইমপোর্ট করে নিন যেন বিল্ড করার পর কোনো সমস্যা না হয়

import Hero from './Hero';
import BannerCtagory from './BannerCtagory';
const Banner = () => {
    return (
    <div className='w-full'>
        <Hero />
        <div className='bg-[#eceae3] w-full  flex justify-center py-3'> {/* py-14 সেকশনটিকে সুন্দর গ্যাপ দিবে */}
           <div className='w-11/12 lg:w-9/12 mx-auto'> {/* mx-auto ই এখানে ম্যাজিক করবে */}
             <BannerCtagory />
           </div>
        </div>
      </div>
    );
};

export default Banner;