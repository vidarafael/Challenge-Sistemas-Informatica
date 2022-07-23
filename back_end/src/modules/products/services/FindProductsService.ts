import { inject, injectable } from "tsyringe";
import { IProduct } from "../infra/mongoose/models/Product";
import { IProductsRepository } from "../repositories/IProductsRepository";

@injectable()
class FindProductsService {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) { }

  async execute(): Promise<IProduct[]> {
    return this.productsRepository.find()
  }
}

export { FindProductsService }