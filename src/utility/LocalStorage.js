const getStoredApplication = () => {
    const storedJobApplication = localStorage.getItem('job-application');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return []
}

const saveJobApplication = id => {
    const storedJobApplications = getStoredApplication();
    const isExist  = storedJobApplications.find(jobId => jobId === id);
    if(!isExist) {
        storedJobApplications.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedJobApplications))
    }
};

export { saveJobApplication, getStoredApplication };