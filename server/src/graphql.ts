import Product, { ProductType } from './models/productModel'
import { createSchema, createYoga } from 'graphql-yoga'
import fs from 'fs'
import path from 'path'

type ProductQ = {
  _id: string
  name: string
  description: string
  price: string
  category: string
  image: string
  page: number
  limit: number
}

export const yoga = createYoga({
  schema: createSchema({
    typeDefs: /* GraphQL */ `
      scalar File

      input Product {
        name: String
        description: String
        price: String
        category: String
        page: Int
        limit: Int
        image: File
      }
      type ProductQ {
        _id: String
        name: String
        description: String
        price: String
        category: String
        image: String
      }
      type Query {
        greetings: String!
        getProducts(filter: Product): [ProductQ!]!
        getProduct(_id: String): ProductQ
      }

      type Mutation {
        readTextFile(file: File!): String!
        saveFile(file: File!): Boolean!
        addProduct(productInfo: Product!): Boolean
        deleteProduct(_id: String): Boolean!
      }
    `,
    resolvers: {
      Query: {
        greetings: () => 'Hello World!',
        getProducts: async (_, { filter }) => {
          const { page, limit } = filter as ProductQ
          console.log(filter.category)
          if (page && limit) {
            const skip: number = (page - 1) * limit
            const pageLimit: number = limit
            return await Product.find({ category: filter.category })
              .skip(skip)
              .limit(pageLimit)
              .lean()
              .exec()
          }
          return await Product.find(filter)
        },
        getProduct: async (_, { _id }) => {
          return await Product.findById(_id)
        },
      },
      Mutation: {
        readTextFile: async (_, { file }: { file: File }) => {
          const textContent = await file.text()
          return textContent
        },

        saveFile: async (_, { file }: { file: File }) => {
          try {
            const fileArrayBuffer = await file.arrayBuffer()
            await fs.promises.writeFile(
              path.join(__dirname + '/public/images', file.name),
              Buffer.from(fileArrayBuffer)
            )
          } catch (e) {
            const err = e as Error
            console.log(err?.message)
            throw Error(err?.message)
          }
          return true
        },
        addProduct: async (_, { productInfo }) => {
          type Pr = { image: File } & Omit<ProductType, 'image'>
          try {
            const args: Pr = productInfo
            const fileArrayBuffer = await args.image.arrayBuffer()
            await Product.create({
              name: args.name,
              category: args.category,
              description: args.description,
              price: args.price,
              image: 'images/' + args.image.name,
            })
            await fs.promises.writeFile(
              path.join(__dirname, 'public/images', args.image.name),
              Buffer.from(fileArrayBuffer)
            )
          } catch (e) {
            const err = e as Error
            console.log(err?.message)
            throw Error(err?.message)
          }
          return true
        },
        deleteProduct: async (_, { _id }) => {
          try {
            const product = await Product.findById(_id)
             fs.unlink(`/public/${product!.image}`,(err)=>{
              console.log(err);
              
             })
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
        },
      },
    },
  }),
})
