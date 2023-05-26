/// <reference types="cypress" />
describe('General Information Test', () => {
    beforeEach(() => {
        cy.log('Visit URL')
        cy.visit('https://business.staging.v2.workerhero.com/auth')
    })

it('General Information Checks ', () => {
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
    cy.log('Clicking the information section ')
    cy.contains('Information').click();
    cy.wait(2000)
    cy.log('Verify that the user is on the information page')
    cy.url().should('include', '/information');
    cy.log('Let\'s check that all the necessary fields are present')
    cy.wait(2000)
    cy.get('[title="Address"] > h3.wh-paragraph-md').should('be.visible');
    cy.wait(2000)
    cy.get('[title="About us"] > h3.wh-paragraph-md').should('be.visible');
    cy.wait(2000)
    cy.get('[title="Company size"] > h3.wh-paragraph-md').should('be.visible');
    cy.wait(2000)
    cy.get('[title="Website"] > h3.wh-paragraph-md').should('be.visible');
    cy.wait(2000)
    cy.get('[title="Professional field"] > h3.wh-paragraph-md').should('be.visible');
    cy.wait(2000)
    cy.contains('Change banner').should('be.visible');
    cy.wait(2000)
    cy.contains('Edit').should('be.visible');
    cy.wait(2000)
    

});
});