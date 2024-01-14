import Product, { ProductType } from './models/productModel'
import { createSchema, createYoga } from 'graphql-yoga'
import fs from 'fs'
import path from 'path'
import { deleteFile, uploadToCdn } from './util/cdnService'

type ProductQ = {
  _id: string
  name: string
  description: string
  price: string
  category: string
  image: string
  page: number
  limit: number
  sort: 'createdAt' | 'price'
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
        image: File
      }
      input ProductFilter {
        name: String
        description: String
        price: String
        category: [String]
        page: Int
        limit: Int
        sort: String
      }
      type PaginatedProduct {
        products: [ProductQ!]
        hasNext: Boolean
      }
      type ProductQ {
        _id: String
        name: String
        description: String
        price: String
        category: String
        image: Image
      }
      type Image {
        fileId: String
        name: String
        size: Int
        filePath: String
        url: String
        fileType: String
        height: Int
        width: Int
        thumbnailUrl: String
      }

      type Query {
        test: String!
        getProductsPaginated(filter: ProductFilter): PaginatedProduct!
        getProducts: [ProductQ]
        getProduct(_id: String): ProductQ
      }

      type Mutation {
        readTextFile(file: File!): String!
        saveFile(file: File!): Boolean!
        addProduct(productInfo: Product): Boolean
        deleteProduct(_id: String): Boolean!
      }
    `,
    resolvers: {
      Query: {
        test: (_, a) => {
          console.log(a)
          return 'Hello World!'
        },
        getProductsPaginated: async (_, { filter }) => {
          const { page, limit, sort } = filter as ProductQ
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
        },
        getProduct: async (_, { _id }) => {
          return await Product.findById(_id)
        },
        getProducts: async () => await Product.find(),
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
            const imageDetails = await uploadToCdn(args.image)
            const fileArrayBuffer = await args.image.arrayBuffer()
            await Product.create({
              name: args.name,
              category: args.category,
              description: args.description,
              price: args.price,
              image: imageDetails,
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
            const fileId = product!.image.fileId
            await deleteFile(fileId)
            fs.unlink(`/public/${product!.image}`, (err) => {
              console.log(err)
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
