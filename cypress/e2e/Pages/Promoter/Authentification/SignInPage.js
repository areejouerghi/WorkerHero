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
        this.enterEmail('test+1@gmail.com')
        this.enterPassword('Sido1234')
        this.clickOnLoginButton()
        this.verifyRedirectToDashboard();
    }
    verifyRedirectToDashboard() {
        cy.log('Verify that the user is logged in')
        cy.url().should('include', '/dashboard');
        cy.wait(2000)
    }
    loginWithInvalidEmail() {

        this.enterEmail('hamza.guizani.com')
        this.enterPassword('Sido1234')
        this.verifyNonRedirectToDashboard();
        this.VerifyEmailAlert();
        
        
    }
    verifyNonRedirectToDashboard() {
        cy.log('Verify that the user is not logged in')
        cy.url().should('include', '/auth');
        cy.wait(2000)
        }

    VerifyEmailAlert() {
        cy.log('Verify that the error message is displayed')
        cy.contains('Invalid email format').should('be.visible')
        cy.wait(2000)
    }
    
    
}