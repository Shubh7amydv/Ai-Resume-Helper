const pdfParse = require("pdf-parse");
const { generateInterviewReport }=require("../services/ai.service");
const interviewReportmodel=require("../models/interviewReport.model");

async function generateInterviewReportController(req, res) {

    // Access the uploaded resume file from req.file (handled by multer middleware)
   

    // convert the resume PDF file to text using pdf-parse
    const resumeContent = await (new pdfParse.PDFParse(Uint8Array.from(req.file.buffer))).getText()

    // Extract job description and self description from request body
    const{ jobDescription,selfDescription }=req.body;


    // Now we have resume content, job description and self description we can use them to generate interview report using Gemini API

    const interviewReportByAi=await generateInterviewReport({
        resume:resumeContent,
        jobDescription,
        selfDescription
    })

    const interviewReport= await interviewReportmodel.create({
        user:req.user.id,
        resume:resumeContent,
        jobDescription,
        selfDescription,
        ...interviewReportByAi
    }) 

    res.status(200).json({
        message:"Interview report generated successfully",
        interviewReport
    })

}


module.exports={ generateInterviewReportController }



