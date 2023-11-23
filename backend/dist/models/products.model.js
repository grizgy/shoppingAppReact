"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.ProductsSchema = void 0;
const sequelize_1 = require("sequelize");
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
const PRODUCTS_TABLE = 'products';
class Product extends sequelize_1.Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PRODUCTS_TABLE,
            modelName: 'Products',
            timestamps: true
        };
    }
}
exports.Product = Product;
const ProductsSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
        field: "id"
    },
    title: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        field: "title"
    },
    price: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        field: "price"
    },
    description: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        field: "description"
    },
    category: {
        allowNull: false,
        type: sequelize_1.DataTypes.ENUM,
        field: "category"
    },
    image: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        field: "image"
    },
    quantity: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        field: "quantity"
    }
};
exports.ProductsSchema = ProductsSchema;
