import * as FormHelpers from '../utils/form-helpers'
import * as Helpers from '../utils/helpers'
import * as Http from '../utils/http-mocks'
import faker from 'faker'

const path = /signup/
const mockEmailInUseError = (): void => Http.mockForbiddenError(path, 'POST')
const mockUnexpectedError = (): void => Http.mockServerError(path, 'POST')
const mockSuccess = (): void => Http.mockOk(path, 'POST', 'fx:account')

const populateFields = (): void => {
  const password = faker.random.alphaNumeric(7)
  cy.getByTestId('name').focus().type(faker.name.findName())
  cy.getByTestId('email').focus().type(faker.internet.email())
  cy.getByTestId('password').focus().type(password)
  cy.getByTestId('passwordConfirmation').focus().type(password)
}

const simulateValidSubmit = (): void => {
  populateFields()
  cy.getByTestId('submit').click()
}

describe('Signup', () => {
  beforeEach(() => {
    cy.visit('signup')
  })

  it('Should load with correct initial state', () => {
    FormHelpers.testInputStatus('name', 'Campo obrigatório')
    cy.getByTestId('name').should('have.attr', 'readonly')

    FormHelpers.testInputStatus('email', 'Campo obrigatório')
    cy.getByTestId('email').should('have.attr', 'readonly')

    FormHelpers.testInputStatus('password', 'Campo obrigatório')
    cy.getByTestId('password').should('have.attr', 'readonly')

    FormHelpers.testInputStatus('passwordConfirmation', 'Campo obrigatório')
    cy.getByTestId('passwordConfirmation').should('have.attr', 'readonly')

    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present error state if form is invalid', () => {
    cy.getByTestId('name').focus().type(faker.random.alphaNumeric(2))
    FormHelpers.testInputStatus('name', 'Valor invalido')

    cy.getByTestId('email').focus().type(faker.random.word())
    FormHelpers.testInputStatus('email', 'Valor invalido')

    cy.getByTestId('password').focus().type(faker.random.alphaNumeric(3))
    FormHelpers.testInputStatus('password', 'Valor invalido')

    cy.getByTestId('passwordConfirmation').focus().type(faker.random.alphaNumeric(4))
    FormHelpers.testInputStatus('passwordConfirmation', 'Valor invalido')

    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present valid state if form is valid', () => {
    cy.getByTestId('name').focus().type(faker.name.findName())
    FormHelpers.testInputStatus('name')

    cy.getByTestId('email').focus().type(faker.internet.email())
    FormHelpers.testInputStatus('email')

    const password = faker.random.alphaNumeric(5)
    cy.getByTestId('password').focus().type(password)
    FormHelpers.testInputStatus('password')

    cy.getByTestId('passwordConfirmation').focus().type(password)
    FormHelpers.testInputStatus('passwordConfirmation')

    cy.getByTestId('submit').should('not.have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present EmailInUserError on 403', () => {
    mockEmailInUseError()
    simulateValidSubmit()
    FormHelpers.testMainError('Esse e-mail já esta em uso')
    Helpers.testUrl('signup')
  })

  it('Should present UnexpectedError on 400', () => {
    mockUnexpectedError()
    simulateValidSubmit()
    FormHelpers.testMainError('Algo de errado aconteceu. Tente novamente em breve.')
    Helpers.testUrl('signup')
  })

  it('Should save account if valid credentials are provided', () => {
    mockSuccess()
    simulateValidSubmit()
    cy.getByTestId('error-wrap').should('not.have.descendants')
    Helpers.testLocalStorageItem('account')
    Helpers.testUrl('')
  })

  it('Should prevent multiple submits', () => {
    mockSuccess()
    populateFields()
    cy.getByTestId('submit').dblclick()
    Helpers.testHttpCallsCount(1)
  })

  it('Should not call submit if form is invalid', () => {
    mockSuccess()
    cy.getByTestId('email').focus().type(faker.internet.email()).type('{enter}')
    Helpers.testHttpCallsCount(0)
  })
})
