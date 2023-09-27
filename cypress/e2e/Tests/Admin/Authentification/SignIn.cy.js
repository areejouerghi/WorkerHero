/// <reference types="cypress" />

import { SignInPage } from "../../../Pages/Admin/Authentification/SignInPage"

const signIn = new SignInPage()

describe('Sign in suite', () => {
    beforeEach(() => {
        cy.log('Visit URL')
        cy.visit('https://admin.staging.v2.workerhero.com/auth')
    })

it('Sign in with valid credentials', () => {
    
    signIn.loginWithValidCredentials()

});
})