import express, {Express} from 'express';
import productRouter from './product.router';

function productsRouterApi (app : Express) {
    const router = express.Router();
    app.use(router);
    router.use('/',productRouter)
}

export default productsRouterApi;