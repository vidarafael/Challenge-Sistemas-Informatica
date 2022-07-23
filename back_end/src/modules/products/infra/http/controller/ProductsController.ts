import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { AddProductFavoriteByUserService } from '../../../services/AddProductFavoriteByUserService'
import { CreateProductService } from '../../../services/CreateProductService'
import { DeleteAllProductsFavoritesByUserService } from '../../../services/DeleteAllProductsFavoritesByUserService'
import { FindAllProductsFavoritesByUserService } from '../../../services/FindAllProductsFavoritesByUserService'

class ProductsController {
  async create(request: Request, response: Response): Promise<void> {
    const {
      title,
      description,
      price,
      imageURL
    } = request.body

    const createProductService = container.resolve(CreateProductService)

    try {
      const product = await createProductService.execute({
        title,
        description,
        price,
        imageURL
      })

      response.status(201).json(product)

    } catch (error) {
      response.status(400).json({ message: error.message })
    }
  }

  async addProductFavoriteByUser(request: Request, response: Response): Promise<void> {
    const { id } = request.user
    const { productId } = request.params

    const addProductFavoriteByUserService = container.resolve(AddProductFavoriteByUserService)

    try {
      const user = await addProductFavoriteByUserService.execute({ user_id: id, product_id: productId })

      response.status(200).json(user)
    } catch (error) {
      response.status(400).json({ message: error.message })
    }
  }

  async findAllProductsFavoritesByUser(request: Request, response: Response): Promise<void> {
    const { id } = request.user

    const findAllProductsFavoritesByUserService = container.resolve(FindAllProductsFavoritesByUserService)

    try {
      const userWithProducts = await findAllProductsFavoritesByUserService.execute(id)

      response.status(200).json(userWithProducts)
    } catch (error) {
      response.status(400).json({ message: error.message })
    }
  }

  async deleteProductFavoriteByUser(request: Request, response: Response): Promise<void> {
    const { id } = request.user
    const { productId } = request.params

    const deleteAllProductsFavoritesByUserService = container.resolve(DeleteAllProductsFavoritesByUserService)

    try {
      await deleteAllProductsFavoritesByUserService.execute(id, productId)

      response.status(200).send()
    } catch (error) {
      response.status(400).json({ message: error.message })
    }
  }
}

export { ProductsController }