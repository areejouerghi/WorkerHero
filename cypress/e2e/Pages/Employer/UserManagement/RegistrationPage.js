export class RegistrationPage {
    clickOnRegisterButton() {
        cy.log('Click on register button')
        cy.wait(2000)
        cy.get('.nav > :nth-child(2)').click();
        cy.wait(2000)
    }
    enterDetailsP1(name,lastName,email,phone,password,repeatPassword,companyName,address) {
        cy.log('Enter first name')
        cy.wait(2000)
        cy.get('input[type="text"][placeholder="Name"]').type(name)
        cy.wait(2000)
        cy.log('Enter last name')
        cy.wait(2000)
        cy.get('input[type="text"][placeholder="Surname"]').type(lastName)
        cy.wait(2000)
        cy.log('Enter email')
        cy.wait(2000)
        cy.get('input[type="text"][placeholder="Email"]').type(email)
        cy.wait(2000)
        cy.log('Enter phone number')
        cy.wait(2000)
        cy.get('input[type="text"][placeholder="Phone"]').type(phone)
        cy.wait(2000)
        cy.log('Enter password')
        cy.wait(2000)
        cy.get('input[type="password"][placeholder="Password"]').type(password)
        cy.wait(2000)
        cy.log('Repeat password')
        cy.wait(2000)
        cy.get('input[type="password"][placeholder="Repeat password"]').type(repeatPassword)
        cy.wait(2000)
        
}
enterDetailsP2(companyName,address) {
    cy.log('Click on continue button')
        cy.wait(2000)
        cy.contains('Continue').click();
        cy.wait(2000)
        cy.log('Enter company name')
        cy.wait(2000)
        cy.get('input[type="text"][placeholder="Name"]').type(companyName)
        cy.wait(2000)
        cy.log('Enter company address')
        cy.wait(2000)
        cy.get('.address-input > .wh-s-input--container > .wh-s-input').type(address)
        cy.wait(2000)
        cy.log('Select professional field')
        cy.wait(2000)
        cy.get('.professional-field-input > .dropdown-container > .zero > .ng-select-container > .ng-arrow-wrapper').click();
        cy.wait(2000)
        cy.log('Select the desired option')
        // cy.get('#ac3c185de6e3-0').click();
        cy.log('Select company size')
        cy.wait(2000)
        // Select the dropdown and click to open it
        cy.get('wh-s-dropdown').click({ multiple: true });
        cy.wait(2000)
        // Locate the desired option and click to select it
        cy.contains('50-250').click();
        cy.wait(2000)
        cy.log('Agree to terms and conditions')
        cy.wait(2000)
        cy.get('input.wh-s-checkbox').check().should('be.checked');
        cy.wait(2000)
}
verifyNonRedirection() {
    cy.log('Verify that the user cannot process to the next step')
    cy.url().should('include', '/auth');
    cy.wait(2000)
}
registerWithValidCredentials() {
    this.clickOnRegisterButton()
    this.enterDetailsP1('QA','Test','hamza@workerhero.com','52668548','Test1234','Test1234')
    this.enterDetailsP2('Test Company','Test Address')
    cy.contains('Sign up').should('be.visible')
    .should('be.visible')
}
registerWithInvalidEmailFormat()
{
    this.clickOnRegisterButton()
    this.enterDetailsP1('QA','Test','email@domain@com','52668548','Test1234','Test1234')
    cy.contains('Email is not valid').should('be.visible')
}
registerWithInvalidPhoneNumberFormat(){
    this.clickOnRegisterButton()
    this.enterDetailsP1('QA','Test','hamza@workerhero.com', '123-456-789','Test1234','Test1234')
    cy.contains('Phone number is not valid').should('be.visible')
}
registerWithNonMatchingPasswords(){
    this.clickOnRegisterButton()
    this.enterDetailsP1('QA','Test','hamza@workerhero.com','52668548','Test1234','Test12345')
    cy.contains('Passwords do not match').should('be.visible')

}
registerWithWeakPassword(){
    this.clickOnRegisterButton()
    this.enterDetailsP1('QA','Test','hamza@workerhero.com','password123','password123','Test12345')
    cy.contains('Password is too weak').should('be.visible')

}
registerWithDuplicateEmail(){
    this.clickOnRegisterButton()
    this.enterDetailsP1('QA','Test','hamza.guizani77+1@gmail.com','52668548','Test1234','Test1234')
    cy.contains('Email already exists').should('be.visible')

}
registerWithEmptyFields(){
    this.clickOnRegisterButton()
    cy.get('input[type="text"][placeholder="Name"]').type(' ').clear()
    cy.get('input[type="text"][placeholder="Surname"]').type(' ').clear()
    cy.get('input[type="text"][placeholder="Email"]').type(' ').clear()
    cy.get('input[type="text"][placeholder="Phone"]').type(' ').clear()
    cy.contains('Name is required').should('be.visible')
    cy.contains('Surname is required').should('be.visible')
    cy.contains('Email is required').should('be.visible')
    cy.contains('Phone number is required').should('be.visible')
    

}
}