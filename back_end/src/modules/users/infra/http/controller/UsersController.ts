import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { AuthenticateUserService } from '../../../services/AuthenticateUserService'
import { CreateUserService } from '../../../services/CreateUserService'
import { FindUserService } from '../../../services/FindUserService'

class UsersController {
  async create(request: Request, response: Response): Promise<void> {
    const { name, email, password } = request.body

    const createUserService = container.resolve(CreateUserService)

    try {
      const user = await createUserService.execute({
        name,
        email,
        password
      })

      response.status(201).json(user)
    } catch (err) {
      response.status(400).json({ message: err.message })
    }
  }

  async authenticate(request: Request, response: Response): Promise<void> {
    const { email, password } = request.body

    const authenticateUserService = container.resolve(AuthenticateUserService)

    try {
      const token = await authenticateUserService.execute({ email, password })

      response.status(200).json(token)
    } catch (error) {
      response.status(401).json({ message: error.message })
    }
  }

  async findUser(request: Request, response: Response): Promise<void> {
    const { id } = request.user

    const findUserService = container.resolve(FindUserService)

    try {
      const user = await findUserService.execute(id)

      response.status(200).json(user)
    } catch (error) {
      response.status(401).json({ message: error.message })
    }
  }
}

export { UsersController }