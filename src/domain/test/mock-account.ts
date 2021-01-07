import { AuthenticationParams } from '@/domain/usecases/authentions'
import faker from 'faker'
import { AccountModel } from '../models/account-model'

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAaccountModel = (): AccountModel => ({
  accessToken: faker.random.uuid()
})
