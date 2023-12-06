import express, {Express} from 'express';
import productRouter from './product.router';
import userRouter from './user.router';

function productsRouterApi (app : Express) {
    const router = express.Router();
    app.use(router);
    router.use('/',productRouter)
}


function usersRouterApi (app : Express) {
    const router = express.Router();
    app.use(router);
    router.use('/',userRouter)
}


export {productsRouterApi, usersRouterApi};