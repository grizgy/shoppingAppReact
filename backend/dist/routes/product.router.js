"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productRouter = express_1.default.Router();
const product_controller_1 = __importDefault(require("../controllers/product.controller"));
productRouter
    .get('/products', product_controller_1.default.get)
    .get('/product/:id', product_controller_1.default.getById)
    .post('/product', product_controller_1.default.create)
    .put('/product/:id', product_controller_1.default.update)
    .delete('/product/:id', product_controller_1.default._delete);
exports.default = productRouter;
