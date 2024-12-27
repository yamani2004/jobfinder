import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export default function JobDescription() {
    const isApplied = true;
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-centre justify-between">
        <div>
          <h1 className="front-bold text-xl">Frontend Developer</h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge variant="ghost" className={"text-blue-600 font-bold"}>
              {" "}
              Position{" "}
            </Badge>
            <Badge variant="ghost" className={"text-red-600 font-bold"}>
              {" "}
              24 LPA{" "}
            </Badge>
            <Badge variant="ghost" className={"text-purple-600 font-bold"}>
              {" "}
              Part Time
            </Badge>
          </div>
        </div>

        <Button disabled = {isApplied}className={`rounded-lg ${isApplied ? 'bg-gray-400 : cursor-not-allowed' : 'bg-[#7209b7] hover:bg-[#5f32ad]'}`}>{isApplied ? 'Already Applied' : 'Apply Now' }</Button>
      </div>
      <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
      <div className='my-4'>
        <h1 className='font-bold my-1'> Role: <span className='pl-4 font-normal text-gray-800'> Frontend Developer</span></h1>
        <h1 className='font-bold my-1'> Location: <span className='pl-4 font-normal text-gray-800'>Hyderabad</span></h1>
        <h1 className='font-bold my-1'> Description: <span className='pl-4 font-normal text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quis rem magni reprehenderit excepturi repellendus amet iusto sunt repellat. Tempora, ducimus itaque doloribus eligendi quas molestias dolor fuga repellendus placeat.</span></h1>
        <h1 className='font-bold my-1'> Experience: <span className='pl-4 font-normal text-gray-800'>2 yrs</span></h1>
        <h1 className='font-bold my-1'> Salary: <span className='pl-4 font-normal text-gray-800'>12LPA</span></h1>
        <h1 className='font-bold my-1'> Total Applicants: <span className='pl-4 font-normal text-gray-800'>4</span></h1>
        <h1 className='font-bold my-1'> Posted Date: <span className='pl-4 font-normal text-gray-800'>17-07-2024</span></h1>

      </div>
    </div>
  );
}
