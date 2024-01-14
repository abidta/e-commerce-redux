import { Types } from 'mongoose'
import Product from '../models/productModel'
import { deleteFile, uploadToCdn } from '../util/cdnService'
import { Pr } from '../util/types'

export const addProduct = async (_:any, { productInfo }:{productInfo:Pr}) => {
  try {
    const args: Pr = productInfo
    const imageDetails = await uploadToCdn(args.image)
    await Product.create({
      name: args.name,
      category: args.category,
      description: args.description,
      price: args.price,
      image: imageDetails,
    })
  } catch (e) {
    const err = e as Error
    console.log(err?.message)
    throw Error(err?.message)
  }
  return true
}
export const deleteProduct = async (_:any, { _id }:{_id:Types.ObjectId}) => {
  try {
    const product = await Product.findById(_id)
    const fileId = product!.image.fileId
    await deleteFile(fileId)
    const { deletedCount } = await Product.deleteOne({
      _id,
    })
    console.log(deletedCount)

    return deletedCount
  } catch (e) {
    const error = e as Error
    console.log(error)
    throw Error(error.message)
  }
}

export const test = () => {
  return 'Hello World!'
}
