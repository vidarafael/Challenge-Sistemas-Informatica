import { Router } from "express";
import { ensureAuthenticated } from "../../../../../shared/infra/http/middlewares/ensureAuthenticated";
import { ProductsController } from "../controller/ProductsController";

const productsRoute = Router()
const productsController = new ProductsController()

productsRoute.post("/", productsController.create)
productsRoute.post("/:productId", ensureAuthenticated, productsController.addProductFavoriteByUser)

productsRoute.get("/favorites", ensureAuthenticated, productsController.findAllProductsFavoritesByUser)
productsRoute.get("/", productsController.find)

productsRoute.delete("/:productId", ensureAuthenticated, productsController.deleteProductFavoriteByUser)

export { productsRoute }