import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        // Reads the hidden DATABASE_URL we added to your .env file
        const conn = await mongoose.connect(process.env.DATABASE_URL);
        console.log(`📡 MongoDB Connected Safely: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ Database Connection Error: ${error.message}`);
        process.exit(1); // Shuts down the application if the database connection fails
    }
};

export default connectDB;