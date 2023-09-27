export class LoginPage {

    enterEmail(email) {
    
        
        cy.get('.email-input > .wh-s-input--container > .wh-s-input').type(email)

    }
    enterPassword(password) {
        cy.get('.password-input > .wh-s-input--container > .wh-s-input').type(password)
    }
    clickOnLoginButton() {
        cy.get('[variant="primary"] > .wh-s-button').click();
    }
    loginWithValidCredentials() {
        this.enterEmail('hamza.guizani77+111@gmail.com')
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