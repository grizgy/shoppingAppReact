import express from 'express';
const productRouter = express.Router();
import productController from '../controllers/product.controller';


productRouter
        .get('/', productController.get)
        .get('/product/:id', productController.getById)
        .post('/product', productController.create)
        .put('/product/:id', productController.update)
        .delete('/product/:id', productController._delete)


export default productRouter;