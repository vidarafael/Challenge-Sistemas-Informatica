import "reflect-metadata"
import * as express from 'express';
import { router } from './routes';
import mongoose from 'mongoose';
import * as path from 'path';
import "../../container"

require("dotenv").config({ path: path.resolve(__dirname, '../../../../.env') })

const app = express();

console.log(process.env.MONGO_CONNECT)

mongoose.connect(process.env.MONGO_CONNECT)
  .then(() => console.log("Mongo started"))
  .catch(err => console.log(err))

app.use(express.json())
app.use(router)

export { app }