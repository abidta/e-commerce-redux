import mongoose from 'mongoose'

export const connectDb = () => {
  mongoose
    .connect(process.env['MONGO_URI']!)
    .then((value: typeof mongoose) => {
      console.log(
        `mongoDb connected on ${value.connection.host}:${value.connection.port}`
      )
    })
    .catch((error) => {
      console.log(error)
      process.exit(1)
    })
}
