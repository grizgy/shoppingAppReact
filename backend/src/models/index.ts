import { Sequelize } from "sequelize";
import { ProductsSchema, Product } from "./products.model";
import { UsersSchema, User } from "./user.models";

function setupModels(sequelize : Sequelize) {
    Product.init(ProductsSchema, Product.config(sequelize));
    User.init(UsersSchema, User.config(sequelize));
}

export default setupModels;