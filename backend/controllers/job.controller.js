import {Job} from "../models/job.model.js";
export const postJob= async (req,res) =>{
    try{
        const { title, description, requirements, salary, location, jobType, experience, position, companyId } = req.body;
        const userId = req.id; // logged in user ki id ki kaun sa user job post kar rha hai
        if (!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId) {
            return res.status(400).json({
                message: "Something is missing.",
                success: false
            })
        };
        const job =await Job.create({
            title:title,
            description:description,
            requirements: requirements.split(","),
            salary: Number(salary),
            location:location,
            jobType:jobType,
            experienceLevel: experience,
            position:position,
            company:companyId,
            created_by: userId
        });

        return res.status(201).json({
            message:"New job created successfully.",
            job,
            success:true
        });
    }
    catch(error){
        console.log(error);
    }
}

export const getAllJobs = async (req,res) =>{
    try{
        // filtering jobs with particular keyword if keyword found else empty string 
        const keyword=req.query.keyword || "";
        const query ={
            $or:[
                {title:{$regex:keyword, $options:"i"}}, // filtering using title
                {description:{$regex:keyword, $options:"i"}} // filtering via description of the job , options making case insensitive
            ]
        };

        // $regex: Performs a pattern match to find documents with fields that match the keyword.
        // Example: Searching for "developer" would match titles or descriptions containing "Developer", "developer", or "DEVELOPER".

        // // here two db query if performed first one based on query get all the retrieved jobs 
        // and that jobs contains only company.id used populate another mongodb quey that field name in 
        // in jobs has company which has a ref : "Company" model name of Company and has collections companies get all data of compnay from there
        /*
        for example :

            Before populate
            [
                  {
                    "_id": "60c72b2f9b1d8e001c8a4567",
                    "title": "Senior NodeJS Developer",
                    "description": "...",
                    "company": "60c72b2f9b1d8e001c8a4568", // Just the company's ID
                    "createdAt": "2024-07-15T10:00:00.000Z"
                  }
            ]


            After Populate

            [
          {
            "_id": "60c72b2f9b1d8e001c8a4567",
            "title": "Senior NodeJS Developer",
            "description": "...",
            "company": { // The full company document is embedded here
              "_id": "60c72b2f9b1d8e001c8a4568",
              "name": "Tech Innovations Inc.",
              "location": "San Francisco, CA",
              "industry": "Software",
              "establishedYear": 2005,
              "createdAt": "2023-01-01T00:00:00.000Z"
            },
            "createdAt": "2024-07-15T10:00:00.000Z" // Newer job
          },
          {
            "_id": "60c72b2f9b1d8e001c8a4569",
            "title": "Frontend Developer",
            "description": "...",
            "company": {
              "_id": "60c72b2f9b1d8e001c8a4570",
              "name": "Creative Solutions LLC",
              "location": "New York, NY",
              "industry": "Marketing",
              "establishedYear": 2010,
              "createdAt": "2023-05-20T00:00:00.000Z"
            },
            "createdAt": "2024-07-10T10:00:00.000Z" // Older job, appears after sorting
          }
        ]

            createdAt:-1 sort in dec order 
        */
        const jobs=await Job.find(query).populate({
            path:"company"
        }).sort({createdAt:-1});
        
        if(!jobs){
            return res.status(404).json({
                message:"Oops!, No match found",
                success:false
            });
        }

        // .populate({ path: "company" }):
        // Populates the company field in each job document with the corresponding Company document.
        // Instead of just returning the company ID, it fetches all details of the related Company document.


        return res.status(200).json({
            jobs,
            success:true
        });
    }
    catch(error){
        console.log(error);
    }
}

//  student 
export const getJobById = async (req,res) =>{
    try{
        const jobId=req.params.id;
        const job = await Job.findById(jobId).populate({
            path:"applications"
        });

        if(!job){
            return res.status(404).json({
                message:"no such opening found",
                success:false
            })
        }

        return res.status(200).json({
            job,
            success:true
        });

    }
    catch(error){
        console.log(error);
    }
}


// how many jobs admin created 
export const getAdminJobs = async(req,res) =>{
    try{
        const adminId=req.id;
        const jobs=await Job.find({created_by:adminId}).populate({
            path:'company',
            createdAt:-1
        });
        if (!jobs) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            });
        };
        return res.status(200).json({
            jobs,
            success: true
        });
    }
    catch(error){
        console.log(error);
    }
}
