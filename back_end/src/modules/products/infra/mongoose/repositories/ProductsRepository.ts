import { IUser } from "../../../../users/infra/mongoose/models/User";
import { ICreateProductsDTO } from "../../../dto/ICreateProductsDTO";
import { IProductsRepository } from "../../../repositories/IProductsRepository";
import { Product, IProduct } from "../models/Product";

class ProductsRepository implements IProductsRepository {

  async create({ title, description, price, imageURL }: ICreateProductsDTO): Promise<IProduct> {
    const product = new Product({
      title,
      description,
      price,
      imageURL
    });

    await product.save()

    return product
  }

  async find(): Promise<IProduct[]> {
    const products = Product.find()
    return products
  }

  async findById(id: string): Promise<IProduct> {
    const product = Product.findById(id)

    return product
  }

  async updateUsers(id: string, data: IUser): Promise<void> {
    await Product.updateOne({ _id: id }, { $push: { users: data } })
  }

  async findWithPopulate(product_id: string): Promise<IProduct> {
    const products = await Product.findById(product_id).populate("users")
    return products
  }

  async update(id: string, data: IProduct): Promise<any> {
    await Product.updateOne({ _id: id }, data)
  }
}

export { ProductsRepository }