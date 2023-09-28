/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const Featured = () => {
    const [allJobs, setJobs] = useState([])
    const [length, setLengths] = useState(4)
    const [button, setButton] = useState(true)
    useEffect(() => {
        fetch('../../../../public/data/jobs copy.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    const handleList = button => {
        if (button) {
            setLengths(allJobs.length)
            setButton(!button)
        }
        else {
            setLengths(4)
            setButton(!button)
        }

    }
    return (
        <div>
            <div className=' text-center space-y-5'>
                <h1 className=' text-5xl font-[800]'>Featured Jobs</h1>
                <p className=' text-lg font-[500]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className=' grid place-items-center lg:grid-cols-2 grid-cols-1 gap-4'>
                    {
                        allJobs.slice(0, length)?.map(job => <Job key={job.id} job={job} ></Job>)
                    }
                </div>
                <button onClick={() => handleList(button)} className={` text-xl ${button ? '' : 'hidden'} px-[28px] py-[19px] bg-gradient-to-r from-[#7E90FE] to-[#9873FF] p-[11px] rounded-md text-white`}>See All Jobs</button>
                <button onClick={() => handleList(button)} className={` text-xl ${button ? 'hidden' : ''} px-[28px] py-[19px] bg-gradient-to-r from-[#7E90FE] to-[#9873FF] p-[11px] rounded-md text-white`}>Show Less</button>
            </div>
        </div >
    );
};

export default Featured;