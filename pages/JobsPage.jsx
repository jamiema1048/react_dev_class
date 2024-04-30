import JobListings from "../components/JobListings";

const JobsPage = ({ page, setPage }) => {
  return (
    <section className="bg-blue-50 px-4 py-6">
      <JobListings page={page} setPage={setPage} />
    </section>
  );
};

export default JobsPage;
