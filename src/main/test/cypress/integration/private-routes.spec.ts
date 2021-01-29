import * as FormHelpers from '../support/form-helpers'
import * as Helpers from '../support/helpers'
import * as Http from '../support/login-mocks'
import faker from 'faker'

describe('PrivateRoutes', () => {
  it('Should logout if survey-list has no token', () => {
    cy.visit('')
    Helpers.testUrl('login')
  })
})
