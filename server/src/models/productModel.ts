import mongoose from 'mongoose'
const { Schema } = mongoose
export type ProductType = {
  name: string
  description: string
  category: 'watches' | 'bags' | 'shoes'
  price: number
  image: string
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
    type: String,
    required: true,
  },
})

const Product = mongoose.model('Product', productSchema)
export default Product
