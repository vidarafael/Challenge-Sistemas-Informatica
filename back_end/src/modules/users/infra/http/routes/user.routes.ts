import { Router } from "express";
import { ensureAuthenticated } from "../../../../../shared/infra/http/middlewares/ensureAuthenticated";
import { UsersController } from "../controller/UsersController";

const usersRoute = Router()
const usersController = new UsersController()

usersRoute.post("/register", usersController.create)
usersRoute.post("/login", usersController.authenticate)
usersRoute.get("/", ensureAuthenticated, usersController.findUser)

export { usersRoute }