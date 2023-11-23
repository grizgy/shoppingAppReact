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
Object.defineProperty(exports, "__esModule", { value: true });
const products_model_1 = require("../models/products.model");
class ProductsService {
    find() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield products_model_1.Product.findAll();
            return res;
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield products_model_1.Product.findByPk(id);
            return res;
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield products_model_1.Product.create(data);
            return res;
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const models = yield this.findOne(id);
            const res = yield this.findOne(data);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const models = yield this.findOne(id);
            yield models.destroy();
            return { deleted: true };
        });
    }
}
exports.default = ProductsService;
