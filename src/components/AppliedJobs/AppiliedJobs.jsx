import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../../utility/LocalStorage";
import AppliedJobsDetails from "./AppliedJobsDetails";

const AppiliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setApplidJobs] = useState([]);
    // const [job_title, company_name] = appliedJobs;


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
            
            console.log(appliedJobs.length)
            // console.log(jobs, storedJobId, jobsApplide)
        }
    }, []);


    return (
        <div>
            <h1>Toto appled Job{appliedJobs.length}</h1>

        <ul>
            {
                appliedJobs.map(job => <AppliedJobsDetails key={job.id} job={job}></AppliedJobsDetails>)
            }
        </ul>
        </div>
    );
};

export default AppiliedJobs;