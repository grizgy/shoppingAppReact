"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 8080;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const productRouter = express_1.default.Router();
app.get('/', (req, res) => {
    res.send('Home');
    console.log(`AAAAAAAAAAAAAAA`);
});
// app.get('/:id', (req : Request, res : Response) => {
//   res.send(`It is working ${req.params.id}`)
// }
// )
(0, routes_1.default)(app);
app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});
