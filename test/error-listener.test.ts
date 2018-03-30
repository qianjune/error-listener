import ErrorListener from '../src/error-listener'

/**
 * Dummy test
 */
describe('Dummy test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('DummyClass is instantiable', () => {
    expect(new ErrorListener()).toBeInstanceOf(ErrorListener)
  })
  it('fetch', () => {
    const el = new ErrorListener()
    const config = {
      email: 'example@gmail.com',
      url: 'http://localhost:1234/api/err',
      product: 'bos'
    }
    const errBody = {
      message: 'example error',
      file: 'example.js',
      lineNo: 1,
      colNo: 1
    }
    const result = el.start(config)(errBody.message, errBody.file, errBody.lineNo, errBody.colNo)
    expect(result).not.toBeNull()
  })
})
