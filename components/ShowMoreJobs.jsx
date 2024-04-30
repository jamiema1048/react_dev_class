import { useState } from "react";
import jobs from "../src/jobs.json";

const ShowMoreJobs = ({ page, setPage }) => {
  const moreJobs = () => {
    setPage(page + 3);
  };
  if (page < jobs.jobs.length) {
    return (
      <section onClick={moreJobs} className="m-auto max-w-lg my-10 px-6">
        <div className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700 hover:cursor-pointer">
          View More Jobs
        </div>
      </section>
    );
  }
};

export default ShowMoreJobs;
