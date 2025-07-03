// creating server 
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js"
import path from "path";
dotenv.config({});
const app=express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions={
    origin:'http://localhost:5173', // error resolve
    credentials:true
}

app.use(cors(corsOptions)); 

// express.json() and express.urlencoded() for parsing JSON and URL-encoded payloads.
// cookieParser for handling cookies.
// cors configured with specific options for handling Cross-Origin Resource Sharing (CORS).


const PORT=process.env.PORT || 3000;

const _dirname = path.resolve();
//  apis's

app.use("/api/v1/user",userRoute);
app.use("/api/v1/company",companyRoute);
app.use("/api/v1/job",jobRoute);
app.use("/api/v1/application",applicationRoute);

// deploy
app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
})

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})