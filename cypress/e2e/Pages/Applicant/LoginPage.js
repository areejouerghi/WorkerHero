export class LoginPage {

    enterEmail(email) {
    
        cy.get('input[type="text"][placeholder="Enter your email"]').type(email)
    }
    enterPassword(password) {
        cy.get('input[type="password"][placeholder="Enter your password"]').type(password)
    }
    clickOnLoginButton() {
        cy.get('[variant="primary"] > .wh-s-button').click();
    }
    loginWithValidCredentials() {
        this.enterEmail('areejouerghi2@gmail.com')
        this.enterPassword('Sido1234')
        this.clickOnLoginButton()
    }
    loginWithInvalidEmail() {
        this.enterEmail('Test.com')
        cy.contains('Invalid email format').should('be.visible')
    }
    loginWithInvalidPassword() {
        this.enterEmail('areejouerghi2@gmail.com')
        this.enterPassword('Sido')
        this.clickOnLoginButton()
        cy.contains('Invalid credentials').should('be.visible')
    }
}