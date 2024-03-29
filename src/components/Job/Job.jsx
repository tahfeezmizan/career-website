import { NavLink } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import './Job.css'


const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, salary, job_type } = job
    return (
        <div className="p-10 space-y-4 border border-gray-200 rounded-md">
            <img className=" w-40 h-auto rounded" src={logo} alt="" />
            <h2>{job_title}</h2>
            <p>{company_name}</p>
            <div className=" flex gap-5">
                <button className="btn btn-outline">{remote_or_onsite}</button>
                <button className="btn btn-outline">{job_type}</button>
            </div>
            <div className=" flex gap-6">
                <p className="flex items-center gap-2"><IoLocationOutline className="text-xl" /> {location}</p>
                <p className="flex items-center gap-2"><AiOutlineDollar className="text-xl" /> {salary}</p>
            </div>

            <NavLink to={`/job/${id}`} className="btn custom-button text-white" >View Details</NavLink>
        </div>
    );
};

export default Job;