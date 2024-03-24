import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect( () => {
        fetch('/jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])


    return (
        <div className='w-full lg:w-11/12 xl:w-8/12 mx-auto px-4 md:px-6 lg:px-0 py-10'>
            <div className="text-center">
                <h2 className='text-5xl'>Featured Jobs</h2>
                <p className=''>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.map(job => <Job job={job} key={job.id}></Job>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;