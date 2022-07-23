import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";
import { IUser } from "../infra/mongoose/models/User";
import { IUsersRepository } from "../repositories/IUsersRepository";

interface IRequest {
  email: string;
  name: string;
  password: string;
}

type IResponse = Omit<IUser, 'password'>

@injectable()
class CreateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({ email, name, password }: IRequest): Promise<IResponse> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email)

    if (userAlreadyExists) {
      throw new Error("User already exists")
    }

    if (!password) {
      throw new Error("No password")
    }

    const passwordHash = await hash(password, 8)

    const user = await this.usersRepository.create({
      email,
      name,
      password: passwordHash
    })

    const userReturn = {
      id: user.id,
      email: user.email,
      name: user.name
    }

    return userReturn
  }
}

export { CreateUserService }