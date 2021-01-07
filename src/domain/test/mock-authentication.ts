import { AuthenticationParams } from '@/domain/usecases/authentions'
import faker from 'faker'

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})
