import { Model, DataTypes, Sequelize } from "sequelize";

const USERS_TABLE = "Users";

class User extends Model {

    static config(sequelize : Sequelize) {
        return {
            sequelize,
            tableName: USERS_TABLE,
            modelName: 'Users',
            timestamps: false
        }
    }
}


const UsersSchema = {
    id: {
        allowNull:false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: "id"
    }, 
    email: {
        allowNull:false,
        type: DataTypes.STRING,
        field: "email"
    },  
    username: {
        allowNull:false,
        type: DataTypes.STRING,
        field: "username"
    }, 
    password: {
        allowNull:false,
        type: DataTypes.STRING,
        field: "password"
    }, 
    firstname: {
        allowNull:false,
        type: DataTypes.STRING,
        field: "firstname"
    }, 
    lastname: {
        allowNull:false,
        type: DataTypes.STRING,
        field: "lastname"
    }, 
    phone: {
        allowNull:false,
        type: DataTypes.INTEGER,
        field: "phone"
    } 
}

export {UsersSchema, User};