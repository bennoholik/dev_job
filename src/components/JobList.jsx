import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecruitsData } from "../redux/modules/recruitSlice";
import JobCard from "./JobCard";

function JobList() {
  const dispatch = useDispatch();
  const { isLoading, error, recruits } = useSelector((state) => state.recruits);

  useEffect(() => {
    dispatch(getRecruitsData());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <h1>로딩 중....</h1>
      </div>
    );
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      {recruits.map((rec, i) => (
        <JobCard rec={rec} i={i} />
      ))}
    </>
  );
}

export default JobList;
