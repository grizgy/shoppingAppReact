"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_model_1 = require("./products.model");
function setupModels(sequelize) {
    products_model_1.Product.init(products_model_1.ProductsSchema, products_model_1.Product.config(sequelize));
}
exports.default = setupModels;
