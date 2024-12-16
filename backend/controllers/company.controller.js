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
            success: true
        });

    }
    catch (error) {
        console.log(error);
    }
}