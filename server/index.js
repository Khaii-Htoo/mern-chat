import express from 'express'
import env from 'dotenv'
import cors from 'cors'
import authRoute from './routes/auth.route.js'

env.config()

// varaibles
const PORT = process.env.PORT || 5000
// server
const app = express()
app.use(cors())
app.use(express.json())
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

// routes
app.use('/api/', authRoute)