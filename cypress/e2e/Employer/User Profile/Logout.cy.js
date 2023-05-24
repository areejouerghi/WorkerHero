/// <reference types="cypress" />
describe('Logout Test', () => {
    beforeEach(() => {
        cy.log('Visit URL')
        cy.visit('https://business.staging.v2.workerhero.com/auth')
    })

it('Logout ', () => {
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
    cy.log('Click log out button')
    cy.get('p.ng-tns-c43-0').click()

});
});
