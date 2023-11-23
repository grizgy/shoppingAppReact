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
const product_service_1 = __importDefault(require("../services/product.service"));
const service = new product_service_1.default();
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield service.create(req.body);
        res.json(response);
    }
    catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
});
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield service.find();
        res.send(response);
    }
    catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
});
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const response = yield service.findOne(id);
        res.send(response);
    }
    catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
});
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const body = req.body;
        const response = yield service.update(id, body);
        res.json(response);
    }
    catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
});
const _delete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const response = yield service.delete(id);
        res.json(response);
    }
    catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
});
exports.default = { create, get, getById, update, _delete };
