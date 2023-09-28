/* eslint-disable no-unused-vars */
import React from 'react';

const HomeBanner = () => {
    return (
        <div>
            <div className=' flex lg:flex-row flex-col justify-center items-center mt-[100px]'>
                <div className=' w-[570px] space-y-6'>
                    <h1 className=' text-7xl font-[800]'>One Step <br /> Closer To Your <br /><span className=' bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text'> Dream Job</span></h1>
                    <p className=' text-xl font-[500] text-[#757575]'>
                        <small>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</small>
                    </p>
                    <button className=' bg-gradient-to-r from-[#7E90FE] to-[#9873FF] py-[19px] px-[28px] rounded-lg'>Get Started</button>
                </div>
                <div className=' w-[800px] h-[700px]'>
                    <img className=' w-[100%]' src='../../../career-hub-main copy/assets/images/user.png' alt="" />
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;