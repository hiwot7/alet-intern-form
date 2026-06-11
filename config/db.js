import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false, // Keeps your terminal clean
});

export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ PostgreSQL Connected Safely to Local Machine');
        // This automatically syncs your models/tables to the database
        await sequelize.sync({ alter: true });
    } catch (error) {
        console.error('❌ Database Connection Error:', error.message);
        process.exit(1);
    }
};

export default sequelize;