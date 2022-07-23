import { inject, injectable } from "tsyringe";
import { IUser } from "../../users/infra/mongoose/models/User";
import { IUsersRepository } from "../../users/repositories/IUsersRepository";
import { IProductsRepository } from "../repositories/IProductsRepository";

@injectable()
class DeleteAllProductsFavoritesByUserService {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository,

    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ) { }

  async execute(user_id: string, productId: string): Promise<void> {
    const product = await this.productsRepository.findWithPopulate(productId)
    const filterOnlyUserById = product.users.filter(u => u.id !== user_id)

    const newProduct = Object.assign(product)
    newProduct.users = filterOnlyUserById
    await this.productsRepository.update(productId, newProduct)

    const user = await this.usersRepository.findWithPopulate(user_id)
    const filterOnlyProductById = user.products.filter(produ => produ.id !== productId)

    const newUser = Object.assign(user)
    newUser.products = filterOnlyProductById
    await this.usersRepository.update(user_id, newUser)
  }
}

export { DeleteAllProductsFavoritesByUserService }