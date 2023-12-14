"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter = express_1.default.Router();
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
userRouter
    .get('/users', user_controller_1.default.get)
    .get('/user/:id', user_controller_1.default.getById)
    .post('/auth/', user_controller_1.default.authenticateUser)
    .post('/register/', user_controller_1.default.create)
    .put('/user/:id', user_controller_1.default.update)
    .delete('/user/:id', user_controller_1.default._delete);
exports.default = userRouter;
