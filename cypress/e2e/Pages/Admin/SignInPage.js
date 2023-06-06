export class SignInPage{
    enterEmail(email) {
    
        cy.get('input[type="text"][placeholder="Email"]').type(email)
    }
    enterPassword(password) {
        cy.get('input[type="password"][placeholder="Password"]').type(password)
    }
    clickOnLoginButton() {
        cy.get('[variant="primary"] > .wh-s-button').click();
    }
    loginWithValidCredentials() {
        this.enterEmail('hamza.guizani77+12@gmail.com')
        this.enterPassword('Sido1234')
        this.clickOnLoginButton()
        this.verifyRedirectToDashboard();
    }
    verifyRedirectToDashboard() {
        cy.log('Verify that the user is logged in')
        cy.url().should('include', '/dashboard');
        cy.wait(2000)
    }
    loginWithInalidCredentials() {
        this.enterEmail('hamza.guizani77@gmail.com')
        this.enterPassword('Sido')
        this.clickOnLoginButton()
        this.verifyNonRedirectToDashboard();
    }
}