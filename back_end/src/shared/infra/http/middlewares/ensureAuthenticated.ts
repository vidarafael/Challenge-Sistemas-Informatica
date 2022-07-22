import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import { UsersRepository } from '../../../../modules/users/infra/mongoose/repositories/UsersRepository'

interface IPayload {
  sub: string
}

async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeaders = request.headers.authorization

  const usersRepository = new UsersRepository()

  if (!authHeaders) {
    throw new Error("Token missing")
  }

  const [, token] = authHeaders.split(" ")

  console.log(process.env.JWT_SECRET)

  try {
    const { sub: user_id } = verify(token, process.env.JWT_SECRET) as IPayload

    const user = await usersRepository.findUserById(user_id)

    if (!user) {
      throw new Error("User not found")
    }

    request.user = {
      id: user.id,
    }

    next()
  } catch {
    throw new Error("Invalid token!")
  }
}

export { ensureAuthenticated }