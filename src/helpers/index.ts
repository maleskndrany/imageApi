import path from 'path'
import fs from 'fs'
import sharp from 'sharp'

// directories to check if exists
const dir = 'src/images/thumb'
const dirFull = 'src/images/full'

interface requestQuery {
  filename?: string
  width?: number
  height?: number
}

const validateRequest = function (request: requestQuery): string[] {
  const errors: string[] = []

  // validate inputs
  if (!request.filename || request.filename === '') {
    errors.push('filename is required!')
  }
  // check if file name exist
  if (!isFullImageExist(request)) {
    errors.push('The image you try to access is not existed!')
  }
  // check if width is number
  if (Number.isNaN(parseInt(request.width + '' || ''))) {
    errors.push('width must be a number!')
  }
  // check if height is number
  if (Number.isNaN(parseInt(request.height + '' || ''))) {
    errors.push('height must be a number!')
  }
  // check if width is exist and positive number
  if (!request.width) {
    errors.push('width is required and must be greater than zero!')
  }
  // check if height is exist and positive number
  if (!request.height || request.height <= 0) {
    errors.push('height is required and must be greater than zero!')
  }

  return errors
}

const isThumbDirExist = function (): boolean {
  // check if directory exists
  if (fs.existsSync(dir)) {
    return true
  } else {
    return false
  }
}

const makeThumbDir = function (): void {
  fs.mkdirSync(dir)
}

// check if full image exist
const isFullImageExist = function (request: requestQuery): boolean {
  const imagePath: string = getFullImagePath(request)

  if (fs.existsSync(imagePath)) {
    return true
  } else {
    return false
  }
}

// check if thumb image exist
const isThumbImageExist = function (request: requestQuery): boolean {
  const imagePath: string = getThumbImagePath(request)

  if (fs.existsSync(imagePath)) {
    return true
  } else {
    return false
  }
}

// get thumb image path from request params
const getThumbImagePath = function (request: requestQuery): string {
  const imagePath: string = path.resolve(
    dir,
    `${request.filename}-${request.width}x${request.height}.jpg`
  )
  return imagePath
}

// get full image path from request params
const getFullImagePath = function (request: requestQuery): string {
  const imagePath: string = path.resolve(dirFull, `${request.filename}.jpg`)
  return imagePath
}

// create thumb image from request params
const createThumbImage = async function (
  request: requestQuery
): Promise<string> {
  const srcPath: string = getFullImagePath(request)
  const targetPath: string = getThumbImagePath(request)

  if (!isThumbDirExist()) {
    makeThumbDir()
  }

  await sharp(srcPath)
    .resize(Number(request.width), Number(request.height))
    .toFormat('jpeg')
    .toFile(targetPath)

  return targetPath
}

export default {
  validateRequest,
  isThumbDirExist,
  isFullImageExist,
  makeThumbDir,
  isThumbImageExist,
  getThumbImagePath,
  getFullImagePath,
  createThumbImage
}
