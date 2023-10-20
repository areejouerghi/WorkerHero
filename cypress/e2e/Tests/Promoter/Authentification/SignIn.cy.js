/// <reference types="cypress" />

import { SignInPage } from "../../../Pages/Promoter/Authentification/SignInPage"

const signIn = new SignInPage()

describe('Sign in suite', () => {
    beforeEach(() => {
        cy.log('Visit URL')
        cy.visit('https://promo.staging.v2.workerhero.com/auth')
    })

it.only('Sign in with valid credentials', () => {
    
    signIn.loginWithValidCredentials()

});

it('Sign in with Invalid Email Format', () => {
    
    signIn.loginWithInvalidEmail()

});
})