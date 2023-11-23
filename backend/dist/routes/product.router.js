"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productRouter = express_1.default.Router();
const product_controller_1 = __importDefault(require("../controllers/product.controller"));
productRouter.get('/asdfg', (req, res) => {
    res.send(`It is working`);
});
productRouter
    .get('/', product_controller_1.default.get)
    .get('/:id', product_controller_1.default.getById)
    .post('/', product_controller_1.default.create)
    .put('/:id', product_controller_1.default.update)
    .delete('/:id', product_controller_1.default._delete);
// productRouter.get('/asdfg', (req : Request, res : Response) => {
//         res.send(`It is working`)
// }
// )
exports.default = productRouter;
