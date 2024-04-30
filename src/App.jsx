import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import JobsPage from "../pages/JobsPage";
import Page404 from "../pages/Page404";
import JobPage, { jobLoader } from "../pages/JobPage";
import AddJobPage from "../pages/AddJobPage";
import EditJobPage from "../pages/EditJobPage";
//import jobs from "../src/jobs.json";

function App() {
  let [page, setPage] = useState(3);
  //Add Job
  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };
  //Delete Job
  const deleteJob = async (id) => {
    console.log("delete", id);
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };
  //Update Job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return;
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage page={page} setPage={setPage} />} />
        <Route
          path="/jobs"
          element={<JobsPage page={page} setPage={setPage} />}
        />
        <Route
          path="/add-job"
          element={
            <AddJobPage page={page} setPage={setPage} addJobSubmit={addJob} />
          }
        />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route
          path="/jobs/:id"
          element={
            <JobPage page={page} setPage={setPage} deleteJob={deleteJob} />
          }
          loader={jobLoader}
        />
        <Route path="*" element={<Page404 />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
