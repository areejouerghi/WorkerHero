/// <reference types="cypress" />

import { SignInPage } from "../../../Pages/Promoter/Authentification/SignInPage"

const signIn = new SignInPage()

import { LogoutPage } from "../../../Pages/Promoter/Authentification/LogoutPage"

const logout = new LogoutPage()

describe('Logging out suite', () => {

    beforeEach(() => {
        cy.log('Visit URL')
        cy.visit('https://promo.staging.v2.workerhero.com/auth')
    })

it('Logging out', () => {
    
    signIn.loginWithValidCredentials()
    logout.clickLogoutButton()
    logout.VerifyLogout()

});
})