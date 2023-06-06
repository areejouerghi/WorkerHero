/// <reference types="cypress" />

import { RegistrationPage } from "../../Pages/Admin/RegistrationPage";

const registration = new RegistrationPage()

describe('Registration Test', () => {
    beforeEach(() => {
        cy.log('Visit URL')
        cy.visit('https://admin.staging.v2.workerhero.com/auth')
    })

it('Registration with valid credentials', () => {
    
    registration.register()

})
});