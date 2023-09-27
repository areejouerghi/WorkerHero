/// <reference types="cypress" />

import { SignInPage } from "../../../Pages/Admin/Authentification/SignInPage"

import { LogoutPage } from "../../../Pages/Admin/Authentification/Logout"

const signIn = new SignInPage()

const logout = new LogoutPage()

describe('Log Out Test', () => {
    beforeEach(() => {
        cy.log('Visit URL')
        cy.visit('https://admin.staging.v2.workerhero.com/auth')
    })

it('Sign in then logout', () => {
    
    signIn.loginWithValidCredentials()
    logout.logout()

});
})