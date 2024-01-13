import { Client, fetchExchange, cacheExchange, gql } from '@urql/core'
// https://e-commerce-anid.onrender.com
export const BASE_URI = 'http://localhost:3000'
export const client = new Client({
  url: `${BASE_URI}/graphql`,
  exchanges: [cacheExchange, fetchExchange],
})
export const GET_PPRODUCTS = gql`
  query GetProducts($filter: Product) {
    getProducts(filter: $filter) {
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
  mutation AddProduct($productInfo: Product!) {
    addProduct(productInfo: $productInfo)
  }
`
export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($_id: String!) {
    deleteProduct(_id: $_id)
  }
`
//for testing
export const SAVE_FILE = gql`
  mutation SaveFile($file: File!) {
    saveFile(file: $file)
  }
`
