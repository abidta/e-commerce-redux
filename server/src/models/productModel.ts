import mongoose from 'mongoose'
import { ProductType } from '../util/types'
const { Schema } = mongoose

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
