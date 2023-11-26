import { Model, DataTypes, Sequelize } from "sequelize";

// export interface Products {
//     id:number;
//     title:string;
//     price:number;
//     description:string;
//     category:Category;
//     image:string;
//     quantity:number;
// }

// export enum Category {
//     'men`s clothing','women`s clothing', 'jewelery', 'electronics'
// }

const PRODUCTS_TABLE = "Products";

class Product extends Model {

        static config(sequelize : Sequelize) {
            return {
                sequelize,
                tableName: PRODUCTS_TABLE,
                modelName: 'Products',
                timestamps: false
            }
        }
}


const ProductsSchema = {
    id: {
        allowNull:false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: "id"
    }, 
    title: {
        allowNull:false,
        type: DataTypes.STRING,
        field: "title"
    },  
    price: {
        allowNull:false,
        type: DataTypes.STRING,
        field: "price"
    }, 
    description: {
        allowNull:false,
        type: DataTypes.STRING,
        field: "description"
    }, 
    category: {
        allowNull:false,
        type: DataTypes.ENUM,
        values: ['men`s clothing','women`s clothing', 'jewelery', 'electronics'],
        field: "category"
    }, 
    image: {
        allowNull:false,
        type: DataTypes.STRING,
        field: "image"
    }, 
    quantity: {
        allowNull:false,
        type: DataTypes.INTEGER,
        field: "quantity"
    } 
}

export {ProductsSchema, Product};