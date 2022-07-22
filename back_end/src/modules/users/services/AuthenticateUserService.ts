import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../repositories/IUsersRepository";

interface IRequest {
  email: string;
  password: string;
}

@injectable()
class AuthenticateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ) { }

  async execute({ email, password }: IRequest): Promise<string> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email)

    if (!userAlreadyExists) {
      throw new Error("Email or password incorrect")
    }

    const comparePasswords = compare(password, userAlreadyExists.password)

    if (!comparePasswords) {
      throw new Error("Email or password incorrect")
    }

    const token = sign({}, process.env.JWT_SECRET, {
      subject: userAlreadyExists.id,
      expiresIn: '1d'
    })

    return token
  }
}

export { AuthenticateUserService }