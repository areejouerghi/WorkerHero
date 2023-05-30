/// <reference types="cypress" />
describe('Reset Password Test', () => {
    beforeEach(() => {
        cy.log('Visit URL')
        cy.visit('https://business.staging.v2.workerhero.com/auth')
    })

it('Reset Password ', () => {
    cy.wait(2000)
    cy.log('Click on forgot password')
    cy.contains('Forgot password ?').click()
    cy.wait(2000)
    cy.log('Enter email')
    cy.get('input[type="text"][placeholder="Enter your Email"]').type('hamza.guizani77+12@gmail.com')
    cy.wait(2000)
    cy.log('Click on reset password button')
    cy.contains('Send reset email').click()
    cy.wait(2000)
})
});