export class RegistrationPage {
    clickOnRegisterButton() {
        cy.log('Click on register button')
        cy.wait(2000)
        cy.contains('Don\'t have an account ? Go to register.').click()
        cy.wait(2000)
    }
    enterDetails(name,lastName,email,password,repeatPassword) {
        cy.log('Enter first name')
        cy.wait(2000)
        cy.get('input[type="text"][placeholder="Enter your First Name"]').type(name)
        cy.wait(2000)
        cy.log('Enter last name')
        cy.wait(2000)
        cy.get('input[type="text"][placeholder="Enter your Last Name"]').type(lastName)
        cy.wait(2000)
        cy.log('Enter email')
        cy.wait(2000)
        cy.get('input[type="text"][placeholder="Enter your Email"]').type(email)
        cy.wait(2000)
        cy.log('Enter password')
        cy.wait(2000)
        cy.get('input[type="password"][placeholder="Enter your Password"]').type(password)
        cy.wait(2000)
        cy.log('Repeat password')
        cy.wait(2000)
        cy.log('Click on sign up button')
        cy.wait(2000)
        cy.contains('Sign up').click();
        cy.wait(2000)
}
register() {
    this.clickOnRegisterButton()
    this.enterDetails('QA','Test','example2@gmail.com','Test1234','Test1234')
    
}
}