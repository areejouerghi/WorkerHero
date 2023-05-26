/// <reference types="cypress" />
describe('Company Profile Suite', () => {
    beforeEach(() => {
        cy.log('Visit URL')
        cy.visit('https://business.staging.v2.workerhero.com/auth')
    })

it('Edit Cancel Test', () => {
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
    cy.log('Verify that the user is on the information page')
    cy.url().should('include', '/information');
    Cypress.on('uncaught:exception', (err) => {
  // Handle the error here
  return false; // Prevent Cypress from failing the test
    });

    // cy.get(':nth-child(6) > .sentry-error-embed > form > .form-submit > .close').click();
    cy.contains('Edit').click({force: true});
    cy.log('Verify that the user can edit the company profile')
    //Company name
    cy.get('input[type="text"][placeholder="Enter company name"]').clear().scrollIntoView().type('WorkerHero');
    //Company email
    //Professional field
    cy.get('[formcontrolname="professionalFields"] > .dropdown-container > .zero > .ng-select-container > .ng-arrow-wrapper').click({force: true});
    //Company phone
    cy.get('input[type="text"][placeholder="Enter your phone number"]').clear({force: true}).type('123456789');
    //Company address
    cy.get('input[type="text"][placeholder="Enter company address"]').clear({force: true}).scrollIntoView().type('1234, WorkerHero Street, WorkerHero City, WorkerHero Country');
    //Company description
    cy.get('.ql-editor').type('Test Description');
    //Company website
    cy.get('input[type="text"][placeholder="Enter company website"]').clear({force: true}).type('https://www.workerhero.com');
    //Submit
    cy.contains('Cancel').click();
})
})