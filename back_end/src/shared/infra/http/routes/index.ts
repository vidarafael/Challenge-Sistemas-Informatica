import { Router } from "express";
import { usersRoute } from "../../../../modules/users/infra/http/routes/user.routes";

const router = Router()

router.use("/users", usersRoute)

export { router }