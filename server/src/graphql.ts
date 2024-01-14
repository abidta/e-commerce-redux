import { createSchema, createYoga } from 'graphql-yoga'
import {
  addProduct,
  deleteProduct,
  test,
} from './controllers/mutationController'
import {
  getProduct,
  getProducts,
  getProductsPaginated,
} from './controllers/queryController'

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
        addProduct(productInfo: Product): Boolean
        deleteProduct(_id: String): Boolean!
      }
    `,
    resolvers: {
      Query: {
        test: test,
        getProductsPaginated: getProductsPaginated,
        getProduct: getProduct,
        getProducts: getProducts,
      },
      Mutation: {
        addProduct: addProduct,
        deleteProduct: deleteProduct,
      },
    },
  }),
})
