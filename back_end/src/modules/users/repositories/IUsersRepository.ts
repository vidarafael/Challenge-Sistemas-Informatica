import { IProduct } from "../../products/infra/mongoose/models/Product"
import { ICreateUserDTO } from "../dto/ICreateUserDTO"
import { IUser } from "../infra/mongoose/models/User"

interface IUsersRepository {
  create({ email, name, password }: ICreateUserDTO): Promise<IUser>
  findByEmail(email: string): Promise<IUser>
  findUserById(id: string): Promise<IUser>
  findUserByIdAndUpdate(id, data: IProduct): Promise<void>
  findWithPopulate(id: string): Promise<IUser>
  update(id: string, data: IUser): Promise<any>
}

export { IUsersRepository }