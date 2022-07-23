import "reflect-metadata"
import * as express from 'express';
import "express-async-errors"
import { router } from './routes';
import mongoose from 'mongoose';
import * as path from 'path';
import "../../container"
import * as cors from 'cors'
import { Request, Response, NextFunction } from 'express'

require("dotenv").config({ path: path.resolve(__dirname, '../../../../.env') })

const app = express();

console.log(process.env.MONGO_CONNECT)

app.use(cors())

mongoose.connect(process.env.MONGO_CONNECT)
  .then(() => console.log("Mongo started"))
  .catch(err => console.log(err))

app.use(express.json())
app.use(router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log("Mensagem:", err)
  res.status(400).json({
    message: err.message
  })

  next(err)
})

export { app }