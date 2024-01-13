"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UsersSchema = void 0;
const sequelize_1 = require("sequelize");
const USERS_TABLE = "Users";
class User extends sequelize_1.Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: USERS_TABLE,
            modelName: 'Users',
            timestamps: false
        };
    }
}
exports.User = User;
const UsersSchema = {
    UserID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
        field: "id"
    },
    email: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        field: "email"
    },
    username: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        field: "username"
    },
    password: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        field: "password"
    },
    firstname: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        field: "firstname"
    },
    lastname: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        field: "lastname"
    },
    phone: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        field: "phone"
    }
};
exports.UsersSchema = UsersSchema;
