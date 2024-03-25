import { useLoaderData, useParams } from "react-router-dom";
import '../Job/Job.css'

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt);
    const { job_description, job_responsibility, educational_requirements, job_title, salary, experiences, contact_information, } = job;


    console.log(job.job_title)
    return (
        <div className="w-full lg:w-11/12 xl:w-8/12 mx-auto px-4 md:px-6 lg:px-0 py-10">

            <div className="grid grid-cols-4 gap-6">
                <div className="col-span-3">
                    <p className="text-base font-medium"><span className="font-bold">Job Description:</span> {job_description}</p>
                    <p className="text-base font-medium"><span className="font-bold">Job Responsibility:</span> {job_responsibility}</p>
                    <p className="text-base font-medium"><span className="font-bold">Educational Requirements:</span>
                    <br /> {educational_requirements}</p>
                    <p className="text-base font-medium"><span className="font-bold">Experiences:</span> 
                    <br />{experiences}</p>
                </div>
                <div className="col-span-1">
                    <div className="p-8 jobDetailsBg mb-6">
                        <h2>Job Details</h2>
                        <p className="text-base font-medium"><span className="font-bold">Salary:</span> {salary}</p>
                        <p className="text-base font-medium"><span className="font-bold">Job Title:</span> {job_title}</p>

                        <h2>Contact Information</h2>
                       
                        
                    </div>
                    <button className="btn w-full">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;