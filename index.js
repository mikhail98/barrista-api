import express from 'express'
import {contentType} from './middlewares/middlewares.js'
import serverRoutes from './api/backend.js'

const PORT = process.env.PORT ?? 3000
const app = express()

app.use(contentType)
app.use(serverRoutes)

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
})

