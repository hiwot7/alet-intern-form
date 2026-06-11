import mongoose from 'mongoose';

const internSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Full name is required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email address is required"],
        unique: true, // 🛑 Prevents the same student from applying twice!
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"],
        trim: true
    },
    university: {
        type: String,
        required: [true, "University selection is required"]
    },
    otherUniversity: {
        type: String,
        default: ''
    },
    yearOfStudy: {
        type: String,
        required: [true, "Year of study is required"]
    },
    gpa: {
        type: Number,
        required: [true, "GPA is required"],
        min: 2.0,
        max: 4.0
    },
    githubProfile: {
        type: String,
        trim: true,
        default: ''
    },
    skills: {
        type: String,
        trim: true,
        default: ''
    }
}, {
    timestamps: true // Automatically injects "createdAt" and "updatedAt" timestamps for you!
});

const Intern = mongoose.model('Intern', internSchema);
export default Intern;