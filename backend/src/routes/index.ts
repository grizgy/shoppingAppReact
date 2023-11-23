import express, {Express} from 'express';
import productRouter from './product.router';

function productsRouterApi (app : Express) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/products',productRouter)
}

export default productsRouterApi;