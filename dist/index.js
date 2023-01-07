"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const express_mongo_sanitize_1 = __importDefault(require("express-mongo-sanitize"));
const cors_1 = __importDefault(require("cors"));
// import helmet from 'helmet'
const routes_1 = __importDefault(require("./routes"));
const config_1 = require("./config/config");
dotenv_1.default.config();
// Connect to MongoDB
// connectDB();
// Server App
const app = (0, express_1.default)();
// middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
app.use((0, express_mongo_sanitize_1.default)());
// // Serve react app
// app.use(express.static(process.cwd() + '/client/build/'));
// app.get('/', (req, res) => {
//   res.sendFile(process.cwd() + '/client/build/index.html');
// });
app.get('/', (req, res) => {
    res.send('<h1>Hello World From the Typescript Server!</h1>');
});
app.use(config_1.APP_PREFIX_PATH, routes_1.default);
app.listen(config_1.PORT, () => {
    console.log(`Example app listening on puertooo ${config_1.PORT} or ${process.env.port}!`);
});
