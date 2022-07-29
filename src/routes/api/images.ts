import express from 'express'
import imageController from '../../controllers/imageController'

const routes = express.Router()

routes.get('/images', imageController.resizeImage)

export default routes
