"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_router_1 = __importDefault(require("./product.router"));
function productsRouterApi(app) {
    const router = express_1.default.Router();
    app.use(router);
    router.use('/', product_router_1.default);
}
exports.default = productsRouterApi;
