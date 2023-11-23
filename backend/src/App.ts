import  express, { Express, Request, Response, Router} from "express";
import  dotenv from "dotenv";
import  cors from "cors";
import productsRouterApi from "./routes";

dotenv.config();
const app : Express = express();

const port = 8080;
app.use(cors());
app.use(express.json());

const productRouter : Router = express.Router();

app.get('/', (req : Request, res : Response) => {
  res.send('Home');
  console.log(`AAAAAAAAAAAAAAA`);
});

// app.get('/:id', (req : Request, res : Response) => {
//   res.send(`It is working ${req.params.id}`)
// }
// )

productsRouterApi(app)

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

