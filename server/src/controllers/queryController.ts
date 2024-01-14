import { Types } from 'mongoose'
import Product from '../models/productModel'
import { ProductQ } from '../util/types'

export const getProducts = async () => await Product.find()
export const getProduct = async (_:any, { _id }:{_id:Types.ObjectId}) => {
  return await Product.findById(_id)
}

export const getProductsPaginated = async (_:any, { filter }:{filter:ProductQ}) => {
  const { page, limit, sort } = filter 
  console.log(filter.category)
  if (page && limit) {
    const skip: number = (page - 1) * limit
    const pageLimit: number = limit
    const sortType: string = sort
    let hasNext: boolean = false
    let products = await Product.find({ category: filter.category })
      .skip(skip)
      .limit(pageLimit + 1)
      .sort({ [sortType]: 'asc' })
      .lean()
      .exec()
    hasNext = products.length > pageLimit
    products = hasNext ? products.slice(0, pageLimit) : products
    return { products: products, hasNext }
  }
  const products = await Product.find(filter)
  return { products }
}
