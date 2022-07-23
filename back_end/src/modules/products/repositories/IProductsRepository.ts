import { IUser } from "../../users/infra/mongoose/models/User"
import { ICreateProductsDTO } from "../dto/ICreateProductsDTO"
import { IProduct } from "../infra/mongoose/models/Product"

interface IProductsRepository {
  create({ title, description, price, imageURL }: ICreateProductsDTO): Promise<IProduct>
  findById(id: string): Promise<IProduct>
  find(): Promise<IProduct[]>
  updateUsers(id: string, data: IUser): Promise<void>
  findWithPopulate(product_id: string): Promise<IProduct>
  update(id: string, data: IProduct): Promise<any>
}

export { IProductsRepository }