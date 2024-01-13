import dotenv from 'dotenv'
import express from 'express'
import { yoga } from './graphql'
import cors from 'cors'
import { connectDb } from './config/db'
import path from 'path'
import morgan from 'morgan'

dotenv.config()
const app = express()
const PORT = process.env['PORT']
connectDb()

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(morgan('dev'))

app.use(yoga.graphqlEndpoint, yoga)

// app.use(
//   '/graphql',(req,res,next)=>{req.setEncoding('utf8')
// next()},
//   graphqlUploadExpress({ maxFiles: 10, maxFileSize: 10000000 }),
//   createHandler({ schema})
// )

app.listen(PORT, () => console.log(`server listening in ${PORT}`))
