import { Sequelize } from "sequelize";
import { ProductsSchema, Product } from "./products.model";

function setupModels(sequelize : Sequelize) {
    Product.init(ProductsSchema, Product.config(sequelize));
}

export default setupModels;