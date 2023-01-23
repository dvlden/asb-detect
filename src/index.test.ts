import { describe, expect, it } from 'vitest'
import { asb } from './index'

describe('index.ts', () => {
  it('returns two properties on init', () => {
    expect(asb).toHaveProperty('isStock')
    expect(asb).toHaveProperty('detect')
  })
})
