import { container } from "tsyringe";
import { ProductsRepository } from "../../modules/products/infra/mongoose/repositories/ProductsRepository";
import { IProductsRepository } from "../../modules/products/repositories/IProductsRepository";
import { UsersRepository } from "../../modules/users/infra/mongoose/repositories/UsersRepository";
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
)

container.registerSingleton<IProductsRepository>(
  "ProductsRepository",
  ProductsRepository
)