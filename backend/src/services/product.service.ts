import {Product} from "../models/products.model"
import { Optional } from "sequelize";

class ProductsService {

    async find () {
        const res = await Product.findAll();
        return res;
    }

    async findOne (id: string) {
        const res = await Product.findByPk(id);
        return res;
    }

    async create (data : Optional<any, string> ) {
        const res = await Product.create(data);
        return res;
    }

    async update (id : string , data :any) {
        const models = await this.findOne(id);
        const res = await this.findOne(data);
    }

    async delete (id : string) {
        const models : any = await this.findOne(id);
        await models.destroy();
        return {deleted : true}
    }

}

export default ProductsService;