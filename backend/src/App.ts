import  express, { Express, Request, Response, Router} from "express";
import  dotenv from "dotenv";
import  cors from "cors";
import connection from "./config/database";
import productsRouterApi from "./routes";

dotenv.config();
const app : Express = express();

const port = 8080;
app.use(cors());
app.use(express.json());

connection()
productsRouterApi(app)

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

