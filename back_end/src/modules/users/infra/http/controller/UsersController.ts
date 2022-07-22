import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateUserService } from '../../../services/CreateUserService'

class UsersController {
  async handle(request: Request, response: Response): Promise<void> {
    const { name, email, password } = request.body

    const createUserService = container.resolve(CreateUserService)

    const user = await createUserService.execute({
      name,
      email,
      password
    })

    response.status(201).json(user)
  }
}

export { UsersController }