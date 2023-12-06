"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouterApi = exports.productsRouterApi = void 0;
const express_1 = __importDefault(require("express"));
const product_router_1 = __importDefault(require("./product.router"));
const user_router_1 = __importDefault(require("./user.router"));
function productsRouterApi(app) {
    const router = express_1.default.Router();
    app.use(router);
    router.use('/', product_router_1.default);
}
exports.productsRouterApi = productsRouterApi;
function usersRouterApi(app) {
    const router = express_1.default.Router();
    app.use(router);
    router.use('/', user_router_1.default);
}
exports.usersRouterApi = usersRouterApi;
