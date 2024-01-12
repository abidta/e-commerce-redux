import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} from 'graphql'
import Product, { type ProductType } from './models/productModel'

//Product
const ProductDef = new GraphQLObjectType({
  name: 'Product',
  fields: {
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
    category: { type: GraphQLString },
    price: { type: GraphQLString },
    image: { type: GraphQLString },
    description: { type: GraphQLString },
  },
})
//Query
const RootQuery = new GraphQLObjectType({
  name: 'root',
  fields: {
    product: {
      type: ProductDef,
      args: { id: { type: GraphQLString } },
      resolve: async (parent, args) => await Product.findById(args.id),
    },
    products: {
      type: new GraphQLList(ProductDef),
      resolve: async () => {
        return await Product.find()
      },
    },
  },
})

//Mutaation
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addProduct: {
      type: ProductDef,
      args: {
        name: { type: GraphQLString },
        category: { type: GraphQLString },
        price: { type: GraphQLString },
        description: { type: GraphQLString },
      },
      resolve: async (parent, args: ProductType) => {
        const product = await Product.create({
          name: args.name,
          category: args.category,
          description: args.description,
          price: args.price,
          image: 'soon',
        })
        return product
      },
    },
  },
})
export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
})
// export const schema = new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: 'Query',
//     fields: {
//       hello1: {
//         type: GraphQLString,
//         resolve: () => 'world',
//       },
//     },
//   }),
// })
