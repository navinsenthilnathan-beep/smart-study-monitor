const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
    res.json({
        project:"Smart Study Monitor",
        version:"1.0.0",
        status:"Running"
    });
});

app.get("/api/dashboard",(req,res)=>{
    res.json({
        studentStatus:"Present",
        attendance:95,
        studyHours:3.7,
        level:"Focused Learner"
    });
});

const PORT=5000;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});