import helpers from '../../helpers'

interface requestQuery {
  filename?: string
  width?: number
  height?: number
}

const request: requestQuery = {
  filename: 'icelandwaterfall',
  width: 250,
  height: 250
}

describe('Test helpers functions', () => {
  it('test validateRequest function', () => {
    const errors: string[] = helpers.validateRequest(request)
    expect(errors.length).toBe(0)
  })

  it('test getFullImagePath function', () => {
    const imagePath: string = helpers.getFullImagePath(request)
    expect(imagePath).not.toBeNull()
  })

  it('test getThumbImagePath function', () => {
    const imagePath: string = helpers.getThumbImagePath(request)
    expect(imagePath).not.toBeNull()
  })

  it('test isFullImageExist function', () => {
    const isExist: boolean = helpers.isFullImageExist(request)
    expect(isExist).toBe(true)
  })

  it('test createThumbImage function', async () => {
    const imagePath: string = await helpers.createThumbImage(request)
    expect(imagePath).not.toBeNull()
  })
})
