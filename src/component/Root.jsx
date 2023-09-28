/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Banner from './Banner/Banner';

const Root = () => {
    const [bn, setBn] = useState('')
    const handleBanner = (banner) => {
        setBn(banner)
    }
    return (
        <div>
            <div className=' bg-[#7e90fe0d]'>
                <div className=' container mx-auto'>
                    <div className=' h-auto'>
                        <Header handleBanner={handleBanner}></Header>
                        <Banner bn={bn}></Banner>
                    </div>
                </div>
            </div>
            <div className=' mt-[130px] mb-[130px]'>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Root;