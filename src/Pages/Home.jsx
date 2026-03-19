import React from 'react';

import Banner from '../Component/home/Banner';
import Ourproducts from '../Component/home/Ourproducts/Ourproducts';
import { useLoaderData } from 'react-router';
import Followusnow from '../Component/home/Followus/Followusnow';
const Home = () => {

    const products=useLoaderData();
    
    return (
        <div>
          
            <Banner></Banner>
            <Ourproducts products={products}></Ourproducts>
            <Followusnow></Followusnow>
        </div>
    );
};

export default Home;