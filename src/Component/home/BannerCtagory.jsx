import React from 'react';
import coffee from '/Users/rudro/Desktop/restart/mile-10/module56/greennova/src/assets/icons/1.png';
import quality from '/Users/rudro/Desktop/restart/mile-10/module56/greennova/src/assets/icons/2.png';
import grades from '/Users/rudro/Desktop/restart/mile-10/module56/greennova/src/assets/icons/3.png';
import roasting from '/Users/rudro/Desktop/restart/mile-10/module56/greennova/src/assets/icons/4.png';
const BannerCtagory = () => {
    // ডাটা অ্যারে
    const items = [
        { id: 1, img: coffee, title: 'Awesome Aroma', desc: 'You will definitely be a fan of the design & aroma of your coffee' },
        { id: 2, img: quality, title: 'High Quality', desc: 'We serve the best coffee beans from the finest local sources' },
        { id: 3, img: grades, title: 'Pure Grades', desc: 'The coffee is made of the green coffee beans which you will love' },
        { id: 4, img: roasting, title: 'Proper Roasting', desc: 'Your coffee is roasted by professional experts with care' },
    ];

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h md:grid-cols-4 gap-8 py-4'>
            {items.map((item) => (
                <div key={item.id} className="flex flex-col md:items-start lg:items-start sm:items-center space-y-5!">
                    <figure className='w-16 h-16 mb-2'>
                        <img src={item.img} alt={item.title} className='w-full h-full object-contain' />
                    </figure>
                    <div>
                        <h2 className="rancho-regular text-2xl text-[#331a15] mb-2!">{item.title}</h2>
                        <p className='raleway font-normal text-[#1B1A1A] text-base leading-relaxed'>
                            {item.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BannerCtagory;