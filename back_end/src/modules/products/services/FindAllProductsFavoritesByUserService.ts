import { inject, injectable } from "tsyringe";
import { IUser } from "../../users/infra/mongoose/models/User";
import { IUsersRepository } from "../../users/repositories/IUsersRepository";

@injectable()
class FindAllProductsFavoritesByUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ) { }

  async execute(user_id: string): Promise<IUser> {
    const user = await this.usersRepository.findWithPopulate(user_id)

    return user
  }
}

export { FindAllProductsFavoritesByUserService }