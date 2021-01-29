import {
  EmailValidation,
  MinLengthValidation,
  RequiredFieldValidation,
  ValidationComposite,
  CompareFieldsValidation
} from '@/validation/validators'
import { makeSignupValidation } from './signup-validation-factory'

describe('SignupValidationFactory', () => {
  test('Should make ValidationComposite with correct validations', () => {
    const composite = makeSignupValidation()
    expect(composite).toEqual(ValidationComposite.build([
      new RequiredFieldValidation('name'),
      new MinLengthValidation('name', 3),
      new RequiredFieldValidation('email'),
      new EmailValidation('email'),
      new RequiredFieldValidation('password'),
      new MinLengthValidation('password', 5),
      new RequiredFieldValidation('passwordConfirmation'),
      new CompareFieldsValidation('passwordConfirmation', 'password')
    ]))
  })
})
