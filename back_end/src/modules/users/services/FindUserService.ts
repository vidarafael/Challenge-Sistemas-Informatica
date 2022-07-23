import { inject, injectable } from "tsyringe";
import { IUser } from "../infra/mongoose/models/User";
import { IUsersRepository } from "../repositories/IUsersRepository";

interface IResponse {
  name: string;
  email: string;
}

@injectable()
class FindUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ) { }

  async execute(id: string): Promise<IResponse> {
    const user = await this.usersRepository.findUserById(id)

    if (!user) {
      throw new Error("User not found")
    }

    const userResponse = {
      name: user.name,
      email: user.email
    }

    return userResponse
  }
}

export { FindUserService }