/// <reference types="cypress" />
describe('Recruiting Test', () => {
    beforeEach(() => {
        cy.log('Visit URL')
        cy.visit('https://business.staging.v2.workerhero.com/auth')
    })

it('Recruiting ', () => {
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
    cy.log('Clicking the recruiting section ')
    cy.wait(2000)
    cy.contains('Recruiting').click();
    cy.wait(2000)
    cy.contains('Jobs').click();
    cy.wait(2000)
    cy.log('Verify that the user is on the recruiting page')
    cy.url().should('include', '/recruiting/jobs');
    cy.wait(2000)
    cy.log('Navigate to the create job page')
    cy.wait(2000)
    cy.visit('https://business.staging.v2.workerhero.com/recruiting/jobs/job/create')
    cy.wait(2000)
    cy.log('Verify that the user is on the create job page')
    cy.wait(2000)
    //Job title
    cy.get('input[Placeholder="Enter the name of your job"]').type('Test Job')
    cy.wait(2000)
    //Job category
    cy.get('.zero > .ng-select-container > .ng-arrow-wrapper').click();
    cy.wait(2000)
    //Job description
    cy.get('.ql-editor').type('Test Description')
    cy.wait(2000)
    //Job adress
    cy.get('input[Placeholder="Enter address of the job"]').type('Test Address')
    cy.wait(2000)
    cy.log('Choosing employment type')
    cy.contains('Contractor').should('be.visible').click();
    cy.wait(2000)
    cy.log('Adding a compensation')
    cy.contains('+ Add compensation').should('be.visible').click();
    cy.wait(2000)
    cy.get('.action-container > .ng-untouched > .dropdown-container > .zero > .ng-select-container > .ng-arrow-wrapper').click();
    cy.wait(2000)
    cy.contains('SALARY_RANGE').should('be.visible').click();
    cy.wait(2000)
    cy.get('[label="Amount From"] > .wh-s-input--container > .wh-s-input').clear().type('1000');
    cy.wait(2000)
    cy.get('[label="Amount To"] > .wh-s-input--container > .wh-s-input').clear().type('2000');
    cy.wait(2000)
    cy.get('[label="Currency"] > .dropdown-container > .zero > .ng-select-container > .ng-arrow-wrapper').click();
    cy.wait(2000)
    cy.contains('CHF').should('be.visible').click();
    cy.wait(2000)
    cy.get('[label="Interval"] > .dropdown-container > .zero > .ng-select-container > .ng-arrow-wrapper').click();
    cy.wait(2000)
    cy.contains('HOURLY').should('be.visible').click();
    cy.wait(2000)
    cy.contains('Next').should('be.visible').click();
    cy.wait(4000)

    // cy.get('[formcontrolname="jobType"] > .dropdown-container > .zero > .ng-select-container > .ng-arrow-wrapper').click();
    // cy.wait(2000)
    // cy.contains('+ Add work experience').should('be.visible').click();
    // cy.wait(2000)
    // cy.get('.ng-pristine.ng-invalid > .wh-s-input--container > .wh-s-input').type('2')
    // cy.contains('+ Add education').should('be.visible').click();
    // cy.wait(2000)
    // cy.get('.work-experience-form > .grid-child.ng-valid > .wh-s-checkbox--container > .wh-s-checkbox').click();
    // cy.get('.education-form > .ng-dirty > .dropdown-container > .zero > .ng-select-container > .ng-arrow-wrapper').click();
    // cy.contains('ACADEMIC').should('be.visible').click();
    // cy.wait(2000)
    // cy.get('.education-form > .grid-child.ng-valid > .wh-s-checkbox--container > .wh-s-checkbox').click();
    // cy.wait(2000)
    // cy.contains('+ Add Driver License').should('be.visible').click();
    // cy.get('.license-form > .ng-dirty > .dropdown-container > .zero > .ng-select-container > .ng-arrow-wrapper').click();
    // cy.wait(2000)
    // cy.contains('A').should('be.visible').click();
    // cy.wait(2000)
    // cy.get('.license-form > wh-s-checkbox.grid-child > .wh-s-checkbox--container > .wh-s-checkbox').type('2')
    // cy.wait(2000)
    // cy.contains('+ Add language').should('be.visible').click();
    // cy.get('.language-form > .ng-invalid > .dropdown-container > .zero > .ng-select-container > .ng-value-container > .ng-input').click();
    // cy.wait(2000)
    // cy.contains('EN').should('be.visible').click();
    // cy.wait(2000)
    // cy.get('[formcontrolname="languageLevel"] > .dropdown-container > .zero > .ng-select-container > .ng-arrow-wrapper').click();
    // cy.wait(2000)
    // cy.contains('BEGINNER').should('be.visible').click();




});
});