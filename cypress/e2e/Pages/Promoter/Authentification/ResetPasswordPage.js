export class ResetPassword {
    clickOnResetPasswordButton() {
        cy.contains('Reset your password').click();
    }
    enterEmail(email) {
        cy.get('.wh-s-input').clear()
        cy.get('.wh-s-input').type(email)
        
    }
    clickOnSendResetLinkButton() {
        cy.contains('Send reset').click();
    }
    VerifyResetPassword() {
        cy.log('Verify that the user is redirected to the reset password page')
        cy.url().should('include', '/auth/reset-password');
        cy.wait(2000)
    }
    VerifyResetPasswordAlert() {
        cy.log('Verify that the error message is displayed')
        cy.contains('If there is user with provided email, password reset instructions will be sent.').should('be.visible')
        cy.wait(2000)
    }
    resetPassword(){
        this.clickOnResetPasswordButton()
        this.enterEmail('test@gmail.com')
        this.clickOnSendResetLinkButton()
        this.VerifyResetPasswordAlert()
        cy.wait(2000)

    }

}