import { useEffect } from "react";
import { useSelector } from "react-redux";
import JobCard from "./JobCard";

function JobList() {
  const { recruits } = useSelector((state) => state.recruits);
  console.log(recruits);

  return (
    <>
      {recruits.map((rec, i) => (
        <JobCard rec={rec} i={i} />
      ))}
    </>
  );
}

export default JobList;
