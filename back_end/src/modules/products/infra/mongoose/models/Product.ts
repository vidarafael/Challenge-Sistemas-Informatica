import { Schema, model } from 'mongoose';
import { ICreateUserDTO } from '../../../../users/dto/ICreateUserDTO';

interface IProduct {
  id?: string;
  title: string;
  description: string;
  price: number;
  imageURL: string;
  users?: ICreateUserDTO[]
}

const productSchema = new Schema<IProduct>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageURL: { type: String, required: true },
  users: [
    { type: Schema.Types.ObjectId, ref: 'User' },
  ]
})

const Product = model<IProduct>('Product', productSchema)

export { Product, IProduct }


