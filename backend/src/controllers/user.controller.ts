import UsersService from '../services/user.service';
import  express, {Request, Response} from "express";


const service = new UsersService();

const create = async (req : Request, res : Response) => {
    try { 
        const response = await service.create(req.body);
        res.json(response);
    } catch (error : any) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const get = async (req : Request, res : Response) => {
    try {
        const response = await service.find();
        res.send(response);
    } catch (error : any) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const getById = async (req : Request, res : Response) => {
    try {
        const { id } = req.params;
        const response = await service.findOne(id);
        res.send(response);
    } catch (error : any) {
        res.status(500).send({ success: false, message: error.message });
    }
}




const authenticateUser = async (req : Request, res : Response) => {
    try {

        const email = req.body.email
        const password = req.body.password
        
        const response = await service.authenticateOne(email, password);

        if (response === null) {
            console.log('Not found!');
          } else {
            res.send(response.dataValues.email + " ," + response.dataValues.password + ", " + response.dataValues.phone);
          }


        
    } catch (error : any) {
        res.status(500).send({ success: false, message: error.message });
    }
}



const update = async (req : Request, res : Response) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const response = await service.update(id,body);
        res.json(response);
    } catch (error : any) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const _delete = async (req : Request, res : Response) => {
    try {
        const { id } = req.params; 
        const response = await service.delete(id);
        res.json(response);
    } catch (error : any) {
        res.status(500).send({ success: false, message: error.message });
    }
}

export default {create, get, getById, authenticateUser, update, _delete};