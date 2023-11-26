import express from 'express';
const productRouter = express.Router();
import productController from '../controllers/product.controller';


productRouter
        .get('/', productController.get)
        .get('/:id', productController.getById)
        .post('/', productController.create)
        .put('/:id', productController.update)
        .delete('/:id', productController._delete)


export default productRouter;