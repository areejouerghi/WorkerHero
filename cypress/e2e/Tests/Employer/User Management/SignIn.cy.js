/// <reference types="cypress" />

import { SignIn } from "../../../Pages/Employer/User Management/SignIn";

const signIn = new SignIn()

describe('Sign in suite', () => {
    beforeEach(() => {
        cy.log('Visit URL')
        cy.visit('https://business.staging.v2.workerhero.com/auth')
    })

it('Sign in with valid credentials', () => {
    
    SignIn.loginWithValidCredentials()

});
it('Sign in with invalid credentials', () => {

    SignIn.loginWithInalidCredentials()
    
});
it('Sign in with empty credentials', () => {
    
    SignIn.loginWithEmptyCredentials()
});
});
