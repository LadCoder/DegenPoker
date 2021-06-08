import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'

dotenv.config()

const port = process.env.port || 4000
const app: Express = express()

app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'from index api' })
    // res.statusCode = 200
    // res.send('OK')
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})
