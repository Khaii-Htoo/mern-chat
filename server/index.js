import express from 'express'
import env from 'dotenv'
import cors from 'cors'

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