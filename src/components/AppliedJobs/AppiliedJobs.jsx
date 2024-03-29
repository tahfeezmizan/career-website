import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../../utility/LocalStorage";
import JobApplidedDetails from "./JobApplidedDetails";

const AppiliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setApplidJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleFilter = filter => {
        if (filter === 'All') {
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote') {
            const remoteJob = appliedJobs.filter(job => job.remote_or_onsite === "Remote");
            setDisplayJobs(remoteJob)
        } else if(filter === 'Onsite'){
            const onSiteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Onsite");
            setDisplayJobs(onSiteJobs)
        }
    }


    useEffect(() => {
        const storedJobId = getStoredApplication();
        if (jobs.length) {
            // fast way
            // const jobsApplied = jobs.filter(job => storedJobId.includes(job.id));

            // second way
            const jobsApplide = [];
            for (const id of storedJobId) {
                const job = jobs.find(job => job.id == id);
                if (job) {
                    jobsApplide.push(job)
                }
            }
            setApplidJobs(jobsApplide);
            setDisplayJobs(jobsApplide)
        }
    }, []);


    return (
        <div className="w-full md:w-8/12 mx-auto">
            <Helmet>
                <title>Job Details | Career Hub</title>
            </Helmet>
            <h1 className="text-5xl text-center py-10">Applied Jobs</h1>
            <div className="py-6 flex justify-end">
                <details className="dropdown ">
                    <summary className="m-1 btn">Filter By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleFilter('All')}><a>All</a></li>
                        <li onClick={() => handleFilter('remote')}><a>Remote</a></li>
                        <li onClick={() => handleFilter('Onsite')}><a>OnSite</a></li>
                    </ul>
                </details>
            </div>

            {
                displayJobs.map(job => <JobApplidedDetails job={job} key={job.id}></JobApplidedDetails>)
            }
        </div>
    );
};

export default AppiliedJobs;