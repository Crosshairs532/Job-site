/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Jobcategory from './Jobcategory/Jobcategory';
import Featured from './Featured/Featured';
import { Helmet } from 'react-helmet-async';
const Home = () => {
    const load = useLoaderData();
    console.log(load)
    return (
        <div>
            <Helmet>
                <title>carrer hub | Home</title>

            </Helmet>
            <div className=' container mx-auto space-y-[130px]'>
                <Jobcategory ></Jobcategory>
                <Featured></Featured>
            </div>

        </div>
    );
};

export default Home;