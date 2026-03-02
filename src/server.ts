import express from 'express';
import orderRoutes from './routes/orderRoutes.js'

const app = express()
const port = 3000

// Middleware
app.use(express.json())

// Mount order routes
app.use('/orders', orderRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})