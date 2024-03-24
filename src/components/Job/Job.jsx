
const Job = ({ job }) => {
    const { logo, job_title, company_name,remote_or_onsite, location, salary } = job
    return (
        <div className="p-10 border border-gray-200 rounded-md">
            <img className="mb-8" src={logo} alt="" />
            <h2>{job_title}</h2>
            <p>{company_name}</p>
            <button className="btn btn-outline">{remote_or_onsite}</button>
            <div className=" flex gap-10">
                <p>{location}</p>
                <p>{salary}</p>
            </div>
        </div>
    );
};

export default Job;