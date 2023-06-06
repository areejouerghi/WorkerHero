/// <reference types="cypress" />

import { SignInPage } from "../../Pages/Admin/SignInPage"

import { LogoutPage } from "../../Pages/Admin/Logout"

const signIn = new SignInPage()

const logout = new LogoutPage()

describe('Log Out Test', () => {
    beforeEach(() => {
        cy.log('Visit URL')
        cy.visit('https://business.staging.v2.workerhero.com/auth')
    })

it('Sign in then logout', () => {
    
    signIn.loginWithValidCredentials()
    logout.logout()

});
})