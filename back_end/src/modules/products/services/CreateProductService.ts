import { inject, injectable } from "tsyringe";
import { ICreateProductsDTO } from "../dto/ICreateProductsDTO";
import { IProduct } from "../infra/mongoose/models/Product";
import { IProductsRepository } from "../repositories/IProductsRepository";

@injectable()
class CreateProductService {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository,
  ) { }

  async execute({
    title,
    description,
    price,
    imageURL,
  }: ICreateProductsDTO): Promise<IProduct> {
    const product = await this.productsRepository.create({
      title,
      description,
      price,
      imageURL
    })

    return product
  }
}

export { CreateProductService }