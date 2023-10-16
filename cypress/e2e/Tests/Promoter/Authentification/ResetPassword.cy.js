/// <reference types="cypress" />

import { SignInPage } from "../../../Pages/Promoter/Authentification/SignInPage"

const signIn = new SignInPage()

import { ResetPassword } from "../../../Pages/Promoter/Authentification/ResetPasswordPage"

const resetPassword = new ResetPassword()

describe('Reset your password', () => {
    beforeEach(() => {
        cy.log('Visit URL')
        cy.visit('https://promo.staging.v2.workerhero.com/auth')
    })

    it('Reset your password', () => {
        resetPassword.resetPassword()
    })
})