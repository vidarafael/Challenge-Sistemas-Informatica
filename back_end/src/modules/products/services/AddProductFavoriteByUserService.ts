import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../users/repositories/IUsersRepository";
import { IProductsRepository } from "../repositories/IProductsRepository";

interface IRequest {
  product_id: string;
  user_id: string;
}

@injectable()
class AddProductFavoriteByUserService {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository,

    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ) { }

  async execute({ product_id, user_id }: IRequest): Promise<any> {
    const product = await this.productsRepository.findById(product_id);

    const productWithPopulate = await this.productsRepository.findWithPopulate(product_id)

    const findIfExists = productWithPopulate.users.some(user => user.id.toString() === user_id)

    if (findIfExists) {
      throw new Error("Product already favorited")
    }

    await this.usersRepository.findUserByIdAndUpdate(user_id, product)

    const user = await this.usersRepository.findUserById(user_id)

    await this.productsRepository.updateUsers(product_id, user)

    return user
  }
}

export { AddProductFavoriteByUserService }