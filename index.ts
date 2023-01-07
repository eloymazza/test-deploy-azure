import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import ExpressMongoSanitize from 'express-mongo-sanitize';
import path from 'path';
import cors from 'cors';
import connectDB from './lib/conn';
// import helmet from 'helmet'
import routes from './routes';
import { APP_PREFIX_PATH, PORT } from './config/config';

dotenv.config();

// Connect to MongoDB
// connectDB();

// Server App
const app: Express = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(ExpressMongoSanitize());

// // Serve react app
// app.use(express.static(process.cwd() + '/client/build/'));
// app.get('/', (req, res) => {
//   res.sendFile(process.cwd() + '/client/build/index.html');
// });

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello World From the Typescript Server!</h1>');
});

app.use(APP_PREFIX_PATH, routes);

app.listen(PORT, () => {
  console.log(
    `Example app listening on puertooo ${PORT} or ${process.env.port}!`
  );
});
