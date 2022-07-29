import express from 'express'
import helpers from '../helpers/index'

const resizeImage = async function (
  req: express.Request,
  res: express.Response
) {
  const errors = helpers.validateRequest(req.query)
  if (errors.length) {
    res.status(400).send(errors.join(', '))
    return
  }

  if (!helpers.isThumbDirExist()) {
    helpers.makeThumbDir()
  }

  if (helpers.isThumbImageExist(req.query)) {
    res.sendFile(helpers.getThumbImagePath(req.query))
    return
  }

  const fullImage: string = await helpers.createThumbImage(req.query)

  res.sendFile(fullImage)
}

export default {
  resizeImage
}
