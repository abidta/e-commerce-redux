import { UploadResponse } from 'imagekit/dist/libs/interfaces'
import IKResponse from 'imagekit/dist/libs/interfaces/IKResponse'
import mongoose from 'mongoose'
const { Schema } = mongoose
export type ProductType = {
  name: string
  description: string
  category: 'watches' | 'bags' | 'shoes'
  price: number
  image: IKResponse<UploadResponse >
}
const productSchema = new Schema<ProductType>({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: Object,
    required: true,
  },
})

const Product = mongoose.model('Product', productSchema)
export default Product
