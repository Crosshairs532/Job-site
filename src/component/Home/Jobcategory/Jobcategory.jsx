/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Jobs from './jobs/Jobs';

const Jobcategory = () => {
    const [alljobs, setJobs] = useState([])
    useEffect(() => {
        fetch('../../../../public/data/categories copy.json')
            .then(res => res.json())
            .then(data => setJobs(data))


    }, [])

    return (
        <div>
            <div className=' text-center space-y-5'>
                <h1 className=' text-5xl font-[800]'>Job Category List</h1>
                <p className=' text-lg font-[500] '>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className=' grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 place-items-center'>
                    {
                        alljobs?.map(jobs => <Jobs key={jobs.id} job={jobs}></Jobs>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Jobcategory;