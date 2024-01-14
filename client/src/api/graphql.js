import { Client, fetchExchange, cacheExchange, gql } from '@urql/core'
//http://localhost:3000
export const BASE_URI = 'https://e-commerce-anid.onrender.com'
export const client = new Client({
  url: `${BASE_URI}/graphql`,
  exchanges: [cacheExchange, fetchExchange],
})
export const GET_PPRODUCTS_PAGINATED = gql`
  query GetProductsPaginated($filter: ProductFilter) {
    getProductsPaginated(filter: $filter) {
      products {
        _id
        name
        category
        price
        description
        image {
          fileId
          filePath
          fileType
          url
          thumbnailUrl
        }
      }
      hasNext
    }
  }
`
export const GET_PPRODUCTS = gql`
  query GetProducts {
    getProducts {
      _id
      name
      category
      price
      description
      image {
        fileId
        filePath
        fileType
        url
        thumbnailUrl
      }
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
