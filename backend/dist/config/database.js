"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const configs_1 = __importDefault(require("./configs"));
const models_1 = __importDefault(require("../models"));
const connection = () => __awaiter(void 0, void 0, void 0, function* () {
    const sequelize = new sequelize_1.Sequelize(configs_1.default.dbName, configs_1.default.dbUser, configs_1.default.dbPassword, {
        host: configs_1.default.dbHost,
        dialect: 'postgres'
    });
    (0, models_1.default)(sequelize);
});
exports.default = connection;
