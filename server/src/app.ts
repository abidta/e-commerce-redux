import dotenv from 'dotenv'
import express from 'express'
import { createHandler } from 'graphql-http/lib/use/express'
import { schema } from './graphql'
import cors from 'cors'
import { connectDb } from './config/db'

dotenv.config()
const app = express()
const PORT = process.env['PORT']
connectDb()

app.use(cors())

app.all('/graphql', createHandler({ schema }))

app.listen(PORT, () => console.log(`server listening in ${PORT}`))
