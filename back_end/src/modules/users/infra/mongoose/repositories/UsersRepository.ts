import { IProduct } from "../../../../products/infra/mongoose/models/Product";
import { ICreateUserDTO } from "../../../dto/ICreateUserDTO";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { IUser, User } from "../models/User";

class UsersRepository implements IUsersRepository {

  async create({ email, name, password }: ICreateUserDTO): Promise<IUser> {
    const user = new User({
      email,
      name,
      password
    });

    await user.save()

    return user
  }

  async findByEmail(email: string): Promise<IUser> {
    const user = await User.findOne({ email })
    return user
  }

  async findUserById(id: string): Promise<IUser> {
    const user = await User.findById(id)
    return user
  }

  async findUserByIdAndUpdate(id: string, data: IProduct): Promise<void> {
    await User.findByIdAndUpdate(id, { $push: { products: data } })
  }

  async findWithPopulate(id: string): Promise<IUser> {
    const userWithProducts = await User.findById(id).populate("products")
    return userWithProducts
  }

  async update(id: string, data: IUser): Promise<any> {
    await User.updateOne({ _id: id }, data)
  }
}

export { UsersRepository }