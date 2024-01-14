import IKResponse from "imagekit/dist/libs/interfaces/IKResponse"
import { UploadResponse } from "imagekit/dist/libs/interfaces"

export type ProductQ = {
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
  
  export type ProductType = {
    name: string
    description: string
    category: 'watches' | 'bags' | 'shoes'
    price: number
    image: IKResponse<UploadResponse >
  }
  export type Pr = { image: File } & Omit<ProductType, 'image'>