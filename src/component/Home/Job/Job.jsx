/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types'
const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job
    return (
        <div>
            <div className=' w-[500px] p-[40px] shadow-md rounded-md border'>
                <img className=' mb-[32px]' src={logo} alt="" />
                <div className=' text-left space-y-1'>
                    <h1>{job_title}</h1>
                    <p>{company_name}</p>
                </div>
                <div className=' flex gap-3 mt-4 mb-4 '>
                    <button className=' group border border-[#7E90FE] text-[#7E90FE] p-[8px] hover:bg-[#7E90FE] hover:text-white duration-1000'>{remote_or_onsite}</button>
                    <button className=' border border-[#7E90FE] text-[#7E90FE] p-[8px] hover:bg-[#7E90FE] hover:text-white duration-1000'>{job_type}</button>
                </div>
                <div className=' flex gap-6'> <p> {location}</p> <p>Salary: {salary}</p> </div>
                <div className=' flex mt-4'>
                    <button className=' bg-gradient-to-r from-[#7E90FE] to-[#9873FF] p-[11px] rounded-md text-white'>view Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;
Job.propTypes = {
    job: PropTypes.object
}