import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';
import { NavLink } from 'react-router-dom';
// import '../Job/Job.css'

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLenght] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])


    return (
        <div className='w-full lg:w-11/12 xl:w-8/12 mx-auto px-4 md:px-6 lg:px-0 py-10'>
            <div className="text-center mb-8">
                <h2 className='text-5xl pb-4 font-bold'>Featured Jobs</h2>
                <p className=''>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-10">
                {
                    jobs.slice(0, dataLength).map(job => <Job job={job} key={job.id}></Job>)
                }
            </div>

            <div className={setDataLenght === jobs.length ? 'hidden' : 'flex items-center justify-center data'}>
                <button onClick={() => setDataLenght(jobs.length)} className="btn ">See All Jobs</button>
            </div>

            {/* <NavLink className="btn custom-button text-white" >View Details</NavLink> */}
        </div>
    );
};

export default FeaturedJobs;