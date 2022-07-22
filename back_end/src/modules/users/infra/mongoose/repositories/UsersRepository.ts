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
}

export { UsersRepository }