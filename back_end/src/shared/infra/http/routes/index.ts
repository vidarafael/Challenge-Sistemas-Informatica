import { Router } from "express";
import { productsRoute } from "../../../../modules/products/infra/http/routes/products.routes";
import { usersRoute } from "../../../../modules/users/infra/http/routes/user.routes";

const router = Router()

router.use("/products", productsRoute)
router.use("/users", usersRoute)

export { router }