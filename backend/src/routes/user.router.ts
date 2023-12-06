import express from 'express';
const userRouter = express.Router();
// import productController from '../controllers/product.controller';
import userController from '../controllers/user.controller';


userRouter
        .get('/auth', userController.get)
        .get('/user/:id', userController.getById)
        .post('/register', userController.create)
        .put('/user/:id', userController.update)
        .delete('/user/:id', userController._delete)


export default userRouter;