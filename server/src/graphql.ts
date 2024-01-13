import Product from './models/productModel'
import { createSchema, createYoga } from 'graphql-yoga'
import fs from 'fs'
import path from 'path'
//Product
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

      type Query {
        greetings: String!
      }

      type Mutation {
        readTextFile(file: File!): String!
        saveFile(file: File!): Boolean!
        addProduct(productInfo: Product!): Boolean
      }
    `,
    resolvers: {
      Query: {
        greetings: () => 'Hello World!',
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
            console.log(e.message)
            return false
          }
          return true
        },
        addProduct: async (_, { productInfo: args }) => {
          try {
            const fileArrayBuffer = await args.image.arrayBuffer()

            await Product.create({
              name: args.name,
              category: args.category,
              description: args.description,
              price: args.price,
              image: args.image.name,
            })
            await fs.promises.writeFile(
              path.join(__dirname, '..', 'public/images', args.image.name),
              Buffer.from(fileArrayBuffer)
            )
          } catch (e) {
            console.log(e.message)
            return false
          }
          return true
        },
      },
    },
  }),
})
