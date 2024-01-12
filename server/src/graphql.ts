import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} from 'graphql'
import Product ,{type ProductType} from './models/productModel'
const ProductDef = new GraphQLObjectType({
  name: 'Product',

  fields: {
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
    category: { type: GraphQLString },
    price: { type: GraphQLString },
    image: { type: GraphQLString },
    details: { type: GraphQLString },
  },
})
const RootQuery = new GraphQLObjectType({
  name: 'root',
  fields: {
    product: {
      type: ProductDef,
      args: { id: { type: GraphQLString } },
      resolve: async (parent,args) => await Product.findById(args.id),
    },
    products: {
      type: new GraphQLList(ProductDef),
      resolve: async () => {
        return await Product.find()
      },
    },
  },
})
const MUtation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addProduct: {
      type: ProductDef,
      args: {
        name: { type: GraphQLString },
        category: { type: GraphQLString },
        price: { type: GraphQLString },
      },
      resolve: async (parent, args:ProductType) => {
        const product = await Product.create({
          name: args.name,
          category: args.category,
          details: 'new product',
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
  mutation: MUtation,
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
