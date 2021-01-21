import faker from 'faker'

import { SetStorageSpy } from '@/data/test'
import { LocalSaveAccessToken } from './local-save-access-token'

describe('LocalSaveAccessToken', () => {
  test('Should call SetStorage with correct value', async () => {
    const setStorageSpy = new SetStorageSpy()
    const accessToken = faker.random.uuid()
    const sut = new LocalSaveAccessToken(setStorageSpy)
    await sut.save(accessToken)
    expect(setStorageSpy.key).toBe('accessToken')
    expect(setStorageSpy.value).toBe(accessToken)
  })
})
