const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000; // The backend will run on port 5000 (React runs on 5173)

// Middleware Configurations
app.use(cors()); // Allows your React frontend to connect
app.use(bodyParser.json()); // Parses incoming application form submissions into readable JavaScript

// Temporary in-memory local data storage array (Acts as a simple mock database for now)
let applications = [];

// 1. POST Endpoint: Captures and saves new student applications
app.post('/api/interns/register', (req, res) => {
    const newApplication = req.body;

    // Basic Server Validation Check
    if (!newApplication.fullName || !newApplication.email) {
        return res.status(400).json({ success: false, message: "Full Name and Email are strictly required." });
    }

    // Push the data package into our local temporary storage array
    applications.push(newApplication);

    console.log("🚀 New Application Received Successfully!");
    console.log("Student Profile Data:", newApplication);

    // Send back a success confirmation to the React frontend
    res.status(201).json({
        success: true,
        message: "Application securely received by Alet Backend!"
    });
});

// 2. GET Endpoint: Allows you to view all compiled applications
app.get('/api/interns', (req, res) => {
    res.status(200).json(applications);
});

// Start listening for incoming connections
app.listen(PORT, () => {
    console.log(`===================================================`);
    console.log(`✅ Alet Technology Backend is running on: http://localhost:${PORT}`);
    console.log(`===================================================`);
});