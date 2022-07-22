import { ICreateUserDTO } from "../dto/ICreateUserDTO"
import { IUser } from "../infra/mongoose/models/User"

interface IUsersRepository {
  create({ email, name, password }: ICreateUserDTO): Promise<IUser>
  findByEmail(email: string): Promise<IUser>
  findUserById(id: string): Promise<IUser>
}

export { IUsersRepository }