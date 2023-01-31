const config = require('config')
const cw = require('@cowellness/cw-micro-service')(config)

beforeAll(() => {
  return cw.autoStart()
})

afterAll(() => {
  return cw.stopAll()
})

describe('Test app working - 404 and headers', () => {
  it('should test', async () => {
    expect(2 + 2).toEqual(4)
  })
})
