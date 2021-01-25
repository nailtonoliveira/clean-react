import * as FormHelper from '../support/form-helper'
import faker from 'faker'

describe('Signup', () => {
  beforeEach(() => {
    cy.visit('signup')
  })

  it('Should load with correct initial state', () => {
    FormHelper.testInputStatus('name', 'Campo obrigatório')
    cy.getByTestId('name').should('have.attr', 'readonly')

    FormHelper.testInputStatus('email', 'Campo obrigatório')
    cy.getByTestId('email').should('have.attr', 'readonly')

    FormHelper.testInputStatus('password', 'Campo obrigatório')
    cy.getByTestId('password').should('have.attr', 'readonly')

    FormHelper.testInputStatus('passwordConfirmation', 'Campo obrigatório')
    cy.getByTestId('passwordConfirmation').should('have.attr', 'readonly')

    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })
})
