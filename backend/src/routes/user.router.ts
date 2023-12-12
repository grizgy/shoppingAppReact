import express from 'express';
const userRouter = express.Router();
import userController from '../controllers/user.controller';


userRouter
        .get('/users', userController.get)
        .get('/user/:id', userController.getById)
        .post('/auth/', userController.authenticateUser)
        .post('/register', userController.create)
        .put('/user/:id', userController.update)
        .delete('/user/:id', userController._delete)


export default userRouter;