import { asb } from '../src/index'

describe('index.ts', () => {
  it('returns two properties on init', () => {
    expect(asb).toHaveProperty('isStock')
    expect(asb).toHaveProperty('detect')
  })
})
