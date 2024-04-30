import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ShowMoreJobs from "../components/ShowMoreJobs";

const HomePage = ({ page, setPage }) => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings page={page} setPage={setPage} isHome={true} />
      <ShowMoreJobs page={page} setPage={setPage} />
    </>
  );
};

export default HomePage;
