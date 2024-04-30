import { useState, useEffect } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";
import jobs from "../src/jobs.json";

const JobListings = ({ page, setPage, isHome = false }) => {
  //console.log(jobs);
  console.log(page);
  //console.log(jobs.jobs.length);
  const jobListings = isHome ? jobs.jobs.slice(0, page) : jobs.jobs;
  const [myJobs, setMyJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? `/api/jobs?_limit=${page}` : `/api/jobs`; //按下sow more jobs網站不會重新載入, page雖然重新被渲染但顯示數量不會變, 故先把第10行解comment, 第43行myJobs暫時改回jobListings
      try {
        //The area that maybe error
        const res = await fetch(apiUrl);
        const data = await res.json();
        setMyJobs(data);
      } catch (error) {
        //Run these code if there's error
        console.log("Error fetching data", error);
      } finally {
        //Run these code no matter there's error or not
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Browse Jobs" : "All Jobs Here"}
        </h2>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobListings.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
