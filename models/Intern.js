import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Intern = sequelize.define('Intern', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { isEmail: true },
    },
    university: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gpa: {
        type: DataTypes.FLOAT,
        allowNull: false,
    }
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

export default Intern;