import 'dotenv/config'
import ImageKit from 'imagekit'
import {
  type UploadOptions,
  type UploadResponse,
} from 'imagekit/dist/libs/interfaces'
import IKResponse from 'imagekit/dist/libs/interfaces/IKResponse'
import { Types } from 'mongoose'

const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY!,
  urlEndpoint: process.env.IMAGEKIT_ENDPOINT_URL!,
})

export const uploadToCdn = async (
  file: File
): Promise<unknown | IKResponse<UploadResponse>> => {
  try {
    const buffer = Buffer.from(await file.arrayBuffer())
    const options: UploadOptions = {
      file: buffer,
      fileName: `${Date.now()}_.jpg`,
    }

    const result = await imageKit.upload(options)
    console.log(result)

    return result
  } catch (error) {
    return error
  }
}
export const deleteFile = async (fileId: string): Promise<boolean> => {
  try {
   let isDelete= await imageKit.deleteFile(fileId)
   console.log(isDelete);
   
    return true
  } catch (err) {
    throw Error('something wrong')
  }
}
