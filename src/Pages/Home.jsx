import React from 'react';
 import { useState } from 'react';
import Banner from '../Component/home/Banner';
import Ourproducts from '../Component/home/Ourproducts/Ourproducts';
import { useLoaderData } from 'react-router';
import Followusnow from '../Component/home/Followus/Followusnow';
const Home = () => {

    const coffee=useLoaderData();
    const [products, setCoffees] = useState(coffee);

    return (
    <div>
            <Banner></Banner>
            <Ourproducts products={products} setCoffees={setCoffees}></Ourproducts>
            <Followusnow></Followusnow>
        </div>
    );
};

export default Home;