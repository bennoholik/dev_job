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
    return (
      <div>
        <h1>{error.message} : 서버에서 정보를 불러들일수 없습니다</h1>
      </div>
    );
  }

  console.log(recruits);

  return (
    <>
      {recruits &&
        recruits.map((recruits, i) => <JobCard rec={recruits} i={i} />)}
    </>
  );
}

export default JobList;