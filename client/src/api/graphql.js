// import { ApolloClient, InMemoryCache, gql,mergeOptions } from '@apollo/client'

// export const client = new ApolloClient({
//   uri: 'http://localhost:3000/graphql',
//   cache: new InMemoryCache(),
// })

import { Client, fetchExchange, cacheExchange, gql } from '@urql/core'
export const client = new Client({
  url: 'http://localhost:3000/graphql',
  exchanges: [cacheExchange, fetchExchange],
})
export const GET_PPRODUCTS = gql`
  query Products {
    products {
      _id
      name
      category
      price
      description
      image
    }
  }
`
export const ADD_PRODUCT = gql`
  mutation AddProduct($productInfo:Product!){
    addProduct(productInfo:$productInfo) 
  }
`
export const SAVE_FILE = gql`
  mutation SaveFile($file: File!) {
    saveFile(file: $file)
  }
`
