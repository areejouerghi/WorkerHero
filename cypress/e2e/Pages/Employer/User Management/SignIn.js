export class SignIn{
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
    verifyNonRedirectToDashboard() {
        cy.log('Verify that the user cannot login')
        cy.url().should('include', '/auth');
        cy.wait(2000)
    }
    loginWithEmptyCredentials() {
        this.enterEmail('hamza.guizani77@gmail.com')
        this.enterPassword('Sido')
        this.errorMessage()
        this.verifyNonRedirectToDashboard();
    }
    errorMessage() {
        cy.contains('Password is required').should('be.visible')
    }
    
}