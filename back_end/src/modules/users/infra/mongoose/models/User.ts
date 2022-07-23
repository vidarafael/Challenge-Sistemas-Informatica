import { Schema, model } from 'mongoose';
import { ICreateProductsDTO } from '../../../../products/dto/ICreateProductsDTO';

interface IUser {
  id?: string;
  name: string;
  email: string;
  password: string;
  products?: ICreateProductsDTO[]
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  products: [
    { type: Schema.Types.ObjectId, ref: 'Product' },
  ]
})

const User = model<IUser>('User', userSchema)

export { User, IUser }


