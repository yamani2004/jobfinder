import React, { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from "../utils/constant";
import { setSingleJob } from "../redux/jobSlice";
import store from "../redux/store";
import { toast } from "sonner";

export default function JobDescription() {
  const { singleJob } = useSelector(store => store.job)
  const {user} = useSelector(store => store.auth)

  const isInitiallyApplied = singleJob?.applications?.some(application => application.applicant === user?._id) || false;
  const [isApplied, setApplied] = useState(isInitiallyApplied);

  const params = useParams();
  const jobid = params.id;

  const applyJobHandler = async() =>{
    try {
      const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobid}`, {withCredentials:true});
      if(res.data.success){
        setApplied(true); // updatethe local state
        const updatedSingleJob = {...singleJob, applications:[...singleJob.applications, {applicant:user?._id}]};
        dispatch(setSingleJob(updatedSingleJob)); // used to update real time ui update
        toast.success(res.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }


  const dispatch = useDispatch();
  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobid}`, { withCredentials: true });
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job))
          setApplied(res.data.job.applications.some(application => application.applicant === user?._id)) // 
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchSingleJob();
  }, [jobid, dispatch, user?._id])


  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-centre justify-between">
        <div>
          <h1 className="front-bold text-xl">{singleJob?.title}</h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge variant="ghost" className={"text-blue-600 font-bold"}>
              {singleJob?.position} Positions
            </Badge>
            <Badge variant="ghost" className={"text-red-600 font-bold"}>
              {singleJob?.salary} LPA
            </Badge>
            <Badge variant="ghost" className={"text-purple-600 font-bold"}>
              {singleJob?.jobType} 
            </Badge>
          </div>
        </div>

        <Button onClick ={isApplied ? null : applyJobHandler} disabled={isApplied} className={`rounded-lg ${isApplied ? 'bg-gray-400 : cursor-not-allowed' : 'bg-[#ed5432] hover:bg-[#e76f54]'}`}>{isApplied ? 'Already Applied' : 'Apply Now'}</Button>
      </div>
      <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>{singleJob?.description}</h1>
      <div className='my-4'>
        <h1 className='font-bold my-1'> Role: <span className='pl-4 font-normal text-gray-800'>{singleJob?.title}</span></h1>
        <h1 className='font-bold my-1'> Location: <span className='pl-4 font-normal text-gray-800'>{singleJob?.location}</span></h1>
        <h1 className='font-bold my-1'> Description: <span className='pl-4 font-normal text-gray-800'>{singleJob?.description}</span></h1>
        <h1 className='font-bold my-1'> Experience: <span className='pl-4 font-normal text-gray-800'>{singleJob?.experienceLevel} years</span></h1>
        <h1 className='font-bold my-1'> Salary: <span className='pl-4 font-normal text-gray-800'>{singleJob?.salary}LPA</span></h1>
        <h1 className='font-bold my-1'> Total Applicants: <span className='pl-4 font-normal text-gray-800'>{singleJob?.applications.length}</span></h1>
        <h1 className='font-bold my-1'> Posted Date: <span className='pl-4 font-normal text-gray-800'>{singleJob?.createdAt.split("T")[0]}</span></h1>

      </div>
    </div>
  );
}
