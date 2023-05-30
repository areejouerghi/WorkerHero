/// <reference types="cypress" />

import { RegistrationPage } from "../../../Pages/Employer/User Management/RegistrationPage";

const registrationPage = new RegistrationPage()

describe('Registration suite', () => {

    beforeEach(() => {
        cy.log('Visit URL')
        cy.visit('https://business.staging.v2.workerhero.com/auth')
    })
    it('Register with valid credentials', () => {
        
        registrationPage.register()

    })
    it('Register with invalid credentials', () => {
        cy.wait(2000)
        cy.log('Click on register button')
        cy.wait(2000)
        cy.get('.nav > :nth-child(2)').click();
        cy.wait(2000)
        cy.log('Enter first name')
        cy.wait(2000)
        cy.get('input[type="text"][placeholder="Name"]').type('QA')
        cy.wait(2000)
        cy.log('Enter last name')
        cy.wait(2000)
        cy.get('input[type="text"][placeholder="Surname"]').type('Test')
        cy.wait(2000)
        cy.log('Enter email')
        cy.wait(2000)
        cy.get('input[type="text"][placeholder="Email"]').type('example.gmail.com')
        cy.wait(2000)
        cy.log('Error message should appear')
        cy.wait(2000)
        cy.contains('Email is not valid').should('be.visible'); 
        cy.log('Enter phone number')
        cy.wait(2000)
        cy.get('input[type="text"][placeholder="Phone"]').type('5266854852668548')
        cy.wait(2000)
        cy.log('Enter password')
        cy.wait(2000)
        cy.get('input[type="password"][placeholder="Password"]').type('123')
        cy.wait(2000)
        cy.log('Repeat password')
        cy.wait(2000)
        cy.get('input[type="password"][placeholder="Repeat password"]').type('1234')
        cy.wait(2000)
        cy.log('Error message should appear')
        cy.wait(2000)
        cy.contains('Passwords do not match!').should('be.visible');
        
    })
})