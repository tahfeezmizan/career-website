import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

const JobApplidedDetails = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, salary, job_type } = job
    return (
        <div className="flex p-10 border border-gray-200 rounded-md justify-between items-center mb-8">
            <Helmet>
                <title>Applied Job Details | career hub</title>
            </Helmet>
            <div className="flex gap-10 items-center">
                <img className="mb-8 w-40 h-auto rounded" src={logo} alt="" />
                <div className=" space-y-3">
                    <h2>{job_title}</h2>
                    <p>{company_name}</p>
                    <div className=" flex gap-5">
                        <button className="btn btn-outline">{remote_or_onsite}</button>
                        <button className="btn btn-outline">{job_type}</button>
                    </div>
                    <div className=" flex gap-6">
                        <p className="flex items-center gap-2"> {location}</p>
                        <p className="flex items-center gap-2"> {salary}</p>
                    </div>
                </div>
            </div>
            <NavLink to={``} className="btn custom-button text-white" >View Details</NavLink>
        </div>
    );
};

export default JobApplidedDetails;