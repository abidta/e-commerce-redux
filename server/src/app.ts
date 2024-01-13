import dotenv from 'dotenv'
import express from 'express'
import { yoga } from './graphql'
import cors from 'cors'
import { connectDb } from './config/db'
import path from 'path'
import fs from 'fs'
import morgan from 'morgan'

dotenv.config()
const app = express()
const PORT = process.env['PORT']
const staticPath: string = __dirname + '/public/images'

connectDb()

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('dev'))

fs.access(staticPath, (error) => {
  if (error) {
    fs.mkdir(staticPath, { recursive: true }, (error) => {
      if (error) {
        console.log(error)
      } else {
        console.log(`path ${staticPath} created successfully`)
      }
    })
  } else {
    console.log('Static path already created')
  }
})

app.use(yoga.graphqlEndpoint, yoga)

// app.use(
//   '/graphql',(req,res,next)=>{req.setEncoding('utf8')
// next()},
//   graphqlUploadExpress({ maxFiles: 10, maxFileSize: 10000000 }),
//   createHandler({ schema})
// )

app.listen(PORT, () => console.log(`server listening in ${PORT}`))
