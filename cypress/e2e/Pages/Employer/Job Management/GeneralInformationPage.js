export class GeneralInformationPage{
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
    }
    checkComponents() {
    cy.contains('Information').click();
    cy.get('[title="Address"] > h3.wh-paragraph-md').should('be.visible');
    cy.get('[title="About us"] > h3.wh-paragraph-md').should('be.visible');
    cy.get('[title="Company size"] > h3.wh-paragraph-md').should('be.visible');
    cy.get('[title="Website"] > h3.wh-paragraph-md').should('be.visible');
    cy.get('[title="Professional field"] > h3.wh-paragraph-md').should('be.visible');
    cy.contains('Change banner').should('be.visible');
    cy.contains('Edit').should('be.visible');
    }
    accessToGeneralInformation(){
    this.loginWithValidCredentials()
    this.checkComponents()
    
    } 
}