"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const database_1 = __importDefault(require("./config/database"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
(0, database_1.default)();
(0, routes_1.productsRouterApi)(app);
(0, routes_1.usersRouterApi)(app);
app.listen(process.env.PORT, () => {
    console.log(`Server is Fire at http://localhost:${process.env.PORT}`);
});
