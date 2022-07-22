import { Router } from "express";
import { UsersController } from "../controller/UsersController";

const usersRoute = Router()
const usersController = new UsersController()

usersRoute.post("/register", usersController.create)
usersRoute.post("/login", usersController.authenticate)

export { usersRoute }