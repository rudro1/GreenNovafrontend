import React from 'react';
import Home from '../Pages/Home';
import { Outlet } from 'react-router';
const Mainlayout = () => {
    return (
        <div>
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;