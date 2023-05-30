export class RegistrationPage {
    clickOnRegisterButton() {
        cy.log('Click on register button')
        cy.wait(2000)
        cy.get('.nav > :nth-child(2)').click();
        cy.wait(2000)
    }
    enterDetails(name,lastName,email,phone,password,repeatPassword,companyName,address) {
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
register() {
    this.clickOnRegisterButton()
    this.enterDetails('QA','Test','example1@gmail.com','52668548','1234','1234','Test','Test')
    
}
}