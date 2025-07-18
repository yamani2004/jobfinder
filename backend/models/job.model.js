import mongoose from "mongoose";
// mongoose is ODM (object data modelling) acts as a translator b/w objects and the documents
// used to create Schema , validate the data entered , perform crud operations 
// methods like .find(),.findById() etc .. given by mongoose 
// 

// here you are defining the job Schema 

/*

Schema 
title : string  required true,
description 
requirements
experience
compendation salary 
job type 
position 
company referenvce
crrated by user refenre 
mongoose.Schemas.Types.ObjectId
*/
const jobSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    requirements:[{
        type:String
    }],
    salary:{
        type:Number,
        required:true
    },
    experienceLevel:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    jobType:{
        type:String,
        required:true
    },
    position:{
        type:Number,
        required:true
    },
    company:{
        // in mongoDB each object gets a unique _id , _id is of objectId
        // 12 byte unique identifdier 
        type:mongoose.Schema.Types.ObjectId,
        ref:'Company',
        required:true
    },
    created_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    applications:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Application',
        }
    ]
},{timestamps:true});
export const Job=mongoose.model("Job",jobSchema);
