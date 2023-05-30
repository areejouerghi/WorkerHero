/// <reference types="cypress" />

import {RegistrationPage} from '../../Pages/Applicant/RegistrationPage';

const registrationPage = new RegistrationPage()

describe('Registration Suite', () => {

    beforeEach(() => {
        cy.log('Visit URL')
        cy.visit('https://app.staging.v2.workerhero.com/auth')
    })

        it.skip('Registration with valid credentials ', () => {

            registrationPage.registerWithValidCredentials()

        })
it('Registration with invalid email ', () => {
    
        registrationPage.registerWithInvalidEmail()

})
it('Registration with non-matching passwords ', () => {
    cy.wait(2000)
    cy.log('Click on Sign up button')
    cy.get('.nav > :nth-child(2)').click();
    cy.wait(2000)
    cy.log('Filling registration form')
    //Name
    cy.get('input[type="text"][placeholder="Name"]').type('QA')
    cy.wait(2000)
    //Surname
    cy.get('input[type="text"][placeholder="Surname"]').type('Tester')
    cy.wait(2000)
    //Email
    cy.get('input[type="text"][placeholder="Email"]').type('areejouerghi2@gmail.com')
    cy.wait(2000)
    //Password
    cy.get('input[type="password"][placeholder="Password"]').type('Sido1234')
    cy.wait(2000)
    //Repeat password
    cy.get('input[type="password"][placeholder="Repeat password"]').type('Sido123')
    cy.wait(2000)
    cy.log('An error message should be displayed')
    cy.contains('Passwords do not match').should('be.visible')

})
})