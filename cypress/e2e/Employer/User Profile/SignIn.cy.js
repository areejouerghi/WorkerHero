/// <reference types="cypress" />
describe('Sign in suite', () => {
    beforeEach(() => {
        cy.log('Visit URL')
        cy.visit('https://business.staging.v2.workerhero.com/auth')
    })

it('Sign in with valid credentials', () => {
    cy.wait(2000)
    cy.log('Enter email')
    cy.get('input[type="text"][placeholder="Email"]').type('hamza.guizani77+12@gmail.com')
    cy.wait(2000)
    cy.log('Enter password')
    cy.get('input[type="password"][placeholder="Password"]').type('Sido1234')
    cy.wait(2000)
    cy.log('Toggle the password')
    cy.get('.ng-fa-icon').click();
    cy.wait(2000)
    cy.log('Click on login button')
    cy.get('button.wh-s-button--primary').click();
    cy.wait(2000)
    cy.log('Verify that the user is logged in')
    cy.url().should('include', '/dashboard');
    cy.wait(2000)

});
it('Sign in with invalid credentials', () => {
    cy.wait(2000)
    cy.log('Enter invalid email')
    cy.get('input[type="text"][placeholder="Email"]').type('hamza77@gmail.com')
    cy.wait(2000)
    cy.log('Enter invalid password')
    cy.get('input[type="password"][placeholder="Password"]').type('Sido')
    cy.wait(2000)
    cy.log('Verify that the user cannot login')
    cy.url().should('include', '/auth');
    cy.wait(2000)
});
it('Sign in with empty credentials', () => {
    cy.wait(2000)
    cy.log('Enter empty email')
    cy.get('input[type="text"][placeholder="Email"]').type('  ')
    cy.wait(2000)
    cy.log('Error message should be displayed')
    cy.contains('Email is required').should('be.visible')
    cy.wait(2000)
    cy.log('Enter empty password')
    cy.get('input[type="password"][placeholder="Password"]').type('  ').clear()
    cy.wait(2000)
    cy.log('Error message should be displayed')
    cy.contains('Password is required').should('be.visible')
    cy.wait(2000)
    cy.log('Verify that the user cannot login')
    cy.url().should('include', '/auth');
    cy.wait(2000)
});
});
