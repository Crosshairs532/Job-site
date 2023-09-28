/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types'
import { FaLightbulb } from 'react-icons/fa'
const Jobs = ({ job }) => {
    const { logo, category_name, availability } = job;
    return (
        <div>
            <div className=' w-[310px] h-[243px] bg-[#9873ff0d] flex flex-col p-[55px] text-left space-y-3 rounded-lg'>

                <div className=' w-[70px] flex justify-center items-center rounded-md h-[70px] bg-[#7e90fe1a]'>
                    <FaLightbulb className=' text-[#7E90FE] text-2xl border' />
                </div>

                <h1 className=' text-xl font-[800]'>{category_name} </h1>
                <p className=' text-sm text-[#A3A3A3]'>{availability}</p>
            </div>
        </div>
    );
};


export default Jobs;
Jobs.propTypes = {
    job: PropTypes.object
}