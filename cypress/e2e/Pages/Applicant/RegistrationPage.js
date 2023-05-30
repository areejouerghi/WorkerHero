export class RegistrationPage {
    
    clickSignUpButton() {
    cy.get('.nav > :nth-child(2)').click();
    }
    enterName(name) {
    cy.get('input[type="text"][placeholder="Name"]').type(name)
    }
    enterSurname(surname) {
    cy.get('input[type="text"][placeholder="Surname"]').type(surname)
    }
    enterEmail(email) {
    cy.get('input[type="text"][placeholder="Email"]').type(email)
    }
    enterPassword(password) {
    cy.get('input[type="password"][placeholder="Password"]').type(password)
    }
    enterRepeatPassword(repeatPassword) {
    cy.get('input[type="password"][placeholder="Repeat password"]').type(repeatPassword)
    }
    clickCreateAccountButton() {
    cy.contains('Create account').click();
    }
    selectCountry(country) {
    cy.get('.ng-arrow-wrapper').click().type(country+'{enter}')
    }
    enterPhoneNumber(phoneNumber) {
    cy.get('input[type="number"][placeholder="Enter your phone number"]').type(phoneNumber)
    }
    clickNextButton() {
    cy.contains('Next').click();
    }
    enterConfirmationCode(confirmationCode) {
    
    cy.get('input[type="number"]').each(($input, index) => {
    const digit = confirmationCode.charAt(index);
    cy.wrap($input).type(digit);
    })}
    

registerWithValidCredentials() {
    this.clickSignUpButton();
    this.enterName('name');
    this.enterSurname('surname');
    this.enterEmail('email@gmail.com');
    this.enterPassword('Sido1234');
    this.enterRepeatPassword('Sido1234');
    this.clickCreateAccountButton();
    this.selectCountry('Tunisia');
    this.enterPhoneNumber(52668548);
    this.clickNextButton();
    this.enterConfirmationCode(1234);
    }
registerWithInvalidEmail() {
    this.clickSignUpButton();
    this.enterName('name');
    this.enterSurname('surname');
    this.enterEmail('Test1@.com');
    cy.contains('Email is not valid').should('be.visible');

}
registerWithInvalidPassword() {
    this.clickSignUpButton();
    this.enterName('name');
    this.enterSurname('surname');
    this.enterEmail('email@gmail.com');
    this.enterPassword('Sido1234');
    this.enterRepeatPassword('Sido');
    cy.contains('Passwords do not match').should('be.visible')

}

}