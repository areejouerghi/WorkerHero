export class SignInPage{
    enterEmail(email) {
    
        cy.get('.email-input > .wh-s-input--container').type(email)
    }
    enterPassword(password) {
        cy.get('.password-input > .wh-s-input--container > .wh-s-input').type(password)
    }
    clickOnLoginButton() {
        cy.get('[variant="primary"] > .wh-s-button').click();
    }
    loginWithValidCredentials() {
        this.enterEmail('hamza.guizani77+10000@gmail.com')
        this.enterPassword('Sido1234')
        this.clickOnLoginButton()
        this.verifyRedirectToDashboard();
    }
    verifyRedirectToDashboard() {
        cy.log('Verify that the user is logged in')
        cy.url().should('include', '/auth');
        cy.wait(2000)
    }
    
}