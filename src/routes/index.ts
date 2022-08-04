import express from 'express'
import imagesRoutes from './api/images'

const routes = express.Router()

routes.get('/', (req, res): void => {
  res.send('Hello and Welcome to Image Api')
})

routes.use('/api', imagesRoutes)

export default routes
