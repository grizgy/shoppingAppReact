import  express, { Express, Request, Response, Router} from "express";
import  cors from "cors";
import connection from "./config/database";
import {productsRouterApi, usersRouterApi} from "./routes";

const app : Express = express();

app.use(cors());
app.use(express.json());

connection()
productsRouterApi(app)
usersRouterApi(app)

app.listen(process.env.PORT, () => {
  console.log(`Server is Fire at http://localhost:${process.env.PORT}`);
}); 