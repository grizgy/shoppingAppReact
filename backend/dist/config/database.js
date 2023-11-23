"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const configs_1 = __importDefault(require("./configs"));
const models_1 = __importDefault(require("../models"));
const sequelize = new sequelize_1.Sequelize(configs_1.default.dbName, configs_1.default.dbUser, configs_1.default.dbPassword, {
    host: configs_1.default.dbHost,
    dialect: 'postgres'
});
sequelize.sync();
(0, models_1.default)(sequelize);
exports.default = sequelize;
