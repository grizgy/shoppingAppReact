import { User } from "../models/user.models";
import { Optional } from "sequelize";

class UsersService {

    async find () {
        const res = await User.findAll();
        return res;
    }

    async findOne (id: any) {
        const res = await User.findByPk(id)
        return res;
    }

    async authenticateOne (email: any, password : any) {

        const res = await User.findOne(    
            { where: {email : email, password : password} }
            );
        return res;
    }

    async create (data : Optional<any, string> ) {
        const res = await User.create(data);
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

export default UsersService;