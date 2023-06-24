/// <reference types="cypress" />

import { ResetPass } from "../../Pages/Admin/ResetPasswordPage";

const resetPass = new ResetPass()

describe('Reset Password Test', () => {

    beforeEach(() => {
        cy.log('Visit URL')
        cy.visit('https://business.staging.v2.workerhero.com/auth')
    })

it('Reset Password ', () => {

    resetPass.resetPassword()
    
})
});