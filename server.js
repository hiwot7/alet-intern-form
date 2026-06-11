import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; // Import database connection
import Intern from './models/Intern.js'; // Import our data schema blueprint

// Load environment variables
dotenv.config();

// Connect to the Live Database Cluster
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Essential Middleware Configuration 
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 1. POST Endpoint: Saves new student applications asynchronously to MongoDB
app.post('/api/interns/register', async (req, res) => {
    try {
        const { fullName, email, phone, university, otherUniversity, yearOfStudy, gpa, githubProfile, skills } = req.body;

        // Check if the applicant email already exists in the collection
        const existingApplicant = await Intern.findOne({ email });
        if (existingApplicant) {
            return res.status(400).json({
                success: false,
                message: "An application with this email address has already been submitted."
            });
        }

        // Create a new instance of the model document
        const newApplication = new Intern({
            fullName,
            email,
            phone,
            university,
            otherUniversity,
            yearOfStudy,
            gpa,
            githubProfile,
            skills
        });

        // Save asynchronously straight into the database cluster
        await newApplication.save();

        console.log("🚀 New Application Saved to Database Successfully!");

        res.status(201).json({
            success: true,
            message: "Application securely received and saved to Alet database!"
        });

    } catch (error) {
        console.error("❌ Error registering intern:", error);
        res.status(500).json({ success: false, message: "Internal Server Error saving data." });
    }
});

// 2. GET Endpoint: Fetches all records out of the live collection
app.get('/api/interns', async (req, res) => {
    try {
        // Queries MongoDB for all interns, sorted by the newest submission first
        const allApplicants = await Intern.find({}).sort({ createdAt: -1 });
        res.json(allApplicants);
    } catch (error) {
        console.error("❌ Error fetching applications:", error);
        res.status(500).json({ message: "Error fetching data from database." });
    }
});

// 3. Root Endpoint fallback
app.get('/', (req, res) => {
    res.send("Alet Technology API Server is active. Please navigate to /api/interns to view submissions.");
});

// Start the Express Engine
app.listen(PORT, () => {
    console.log(`✅ Alet Technology Backend is running on: http://localhost:${PORT}`);
});