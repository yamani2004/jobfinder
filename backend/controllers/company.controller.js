import { Company } from "../models/company.model.js";
export const registerCompany = async (req, res) => {
    try {
        // taking company name
        const { companyName } = req.body;

        // if company name not found 
        if (!companyName) {
            return res.status(400).json({
                message: "Company name is required.",
                success: false
            })
        }

        // finding the company by comparing its schema created in model
        let company = await Company.findOne({ name: companyName });


        // company name should be unique 
        if (company) {
            return res.status(400).json({
                message: "Company name already exist.",
                success: false
            })
        };

        //  creating company 

        company = await Company.create({
            name: companyName,
            userId: req.id // can be received from authentication 
        });



        return res.status(201).json({
            message: "Company registered successfully.",
            company,
            success: true
        });

    }
    catch (error) {
        console.log(error);
    }
}
// get all the companies that are been registered
export const getCompany = async (req, res) => {
    try {
        const userId = req.id; // logged in user id
        const companies = await Company.find({ userId });
        if (!companies) {
            return res.status(404).json({
                message: "No company found for given user Id.",
                success: false
            });
        }

        return res.status(200).json({
            message: "Company Found",
            companies,
            success: true
        });
    }
    catch (error) {
        console.log(error);
    }
}

//  get company by id


export const getCompanyById = async (req, res) => {
    try {
        // url pass karte hai toh id eise pass hoti hai :/ params use karenge
        const companyId = req.params.id;
        const company = await Company.findById(companyId);
        if (!company) {
            return res.status(400).json({
                message: "No such company found.",
                success: false
            })
        }
        return res.status(200).json({
            message: "Company found with given id.",
            company,
            success: true
        });

    }
    catch (error) {
        console.log(error);
    }
}



export const updateCompany = async (req, res) => {
    try {
        const { name, description, website, location } = req.body;
        const file = req.file;
        // cloudinary 


        const updateData = { name, description, website, location };

        // finding company by id and update the data by using new true means data will be updated
        const company = await Company.findByIdAndUpdate(req.params.id, updateData, { new: true });


        // if company not found


        if (!company) {
            return res.status(404).json({
                message: "No such company found",
                success: false
            });
        }
        return res.status(200).json({
            message: "Data updated successfully.",
            success: true
        });
    }
    catch (error) {
        console.log(error);
    }
}