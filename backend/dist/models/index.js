"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_model_1 = require("./products.model");
const user_models_1 = require("./user.models");
function setupModels(sequelize) {
    products_model_1.Product.init(products_model_1.ProductsSchema, products_model_1.Product.config(sequelize));
    user_models_1.User.init(user_models_1.UsersSchema, user_models_1.User.config(sequelize));
}
exports.default = setupModels;
