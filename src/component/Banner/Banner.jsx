/* eslint-disable no-unused-vars */
import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';

const Banner = ({ bn }) => {
    console.log(bn, 'inside banner')
    return (
        <div>
            {
                bn === 'home' ? <HomeBanner></HomeBanner> : (bn === 'statistics' ? <h1 className=' text-3xl font-[800] text-center mt-[100px] mb-[100px]'>{bn}</h1> : (bn === 'applied' ? <h1 className=' text-3xl font-[800] mt-[25%] text-center'>{bn}</h1> : ''))
            }
        </div>
    );
};

export default Banner;