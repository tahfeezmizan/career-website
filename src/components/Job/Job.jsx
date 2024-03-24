import { NavLink } from "react-router-dom";
import './Job.css'

const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, salary, job_type } = job
    return (
        <div className="p-10 border border-gray-200 rounded-md">
            <img className="mb-8" src={logo} alt="" />
            <h2>{job_title}</h2>
            <p>{company_name}</p>
            <div className=" flex gap-5">
                <button className="btn btn-outline">{remote_or_onsite}</button>
                <button className="btn btn-outline">{job_type}</button>
            </div>
            <div className=" flex gap-10">
                <p>{location}</p>
                <p>{salary}</p>
            </div>

            <NavLink className="btn custom-button text-white" >View Details</NavLink>
        </div>
    );
};

export default Job;