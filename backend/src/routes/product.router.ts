import express from 'express';
const productRouter = express.Router();
import productController from '../controllers/product.controller';
import {Request, Response} from "express";


productRouter.get('/asdfg', (req : Request, res : Response) => {
        res.send(`It is working`)
}
)


productRouter
        .get('/', productController.get)
        .get('/:id', productController.getById)
        .post('/', productController.create)
        .put('/:id', productController.update)
        .delete('/:id', productController._delete)

// productRouter.get('/asdfg', (req : Request, res : Response) => {
//         res.send(`It is working`)
// }
// )

export default productRouter;