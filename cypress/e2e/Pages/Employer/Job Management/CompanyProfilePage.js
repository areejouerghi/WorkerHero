export class CompanyProfilePage {
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
        this.enterEmail('areejouerghi2@gmail.com')
        this.enterPassword('Sido1234')
        this.clickOnLoginButton()
    }
    enterCompanyName(companyName) {
    cy.get('input[type="text"][placeholder="Enter company name"]').clear().scrollIntoView().type(companyName);
    }
    selectProfessionalField() {
    cy.get('[formcontrolname="professionalFields"] > .dropdown-container > .zero > .ng-select-container > .ng-arrow-wrapper').click({force: true});
    }
    enterPhoneNumber(phoneNumber) {
    cy.get('input[type="text"][placeholder="Enter your phone number"]').clear({force: true}).type(phoneNumber);
    }
    enterCompanyAddress(companyAddress) {
    cy.get('input[type="text"][placeholder="Enter company address"]').clear({force: true}).scrollIntoView().type(companyAddress);
    }
    enterCompanyDescription(companyDescription) {
    cy.get('.ql-editor').type(companyDescription);
    }
    enterCompanyWebsite(companyWebsite) {
    cy.get('input[type="text"][placeholder="Enter company website"]').clear({force: true}).type('https://'+companyWebsite);
    }
    updateCompanyProfile() {
        this.enterEmail('hamza.guizani77+12@gmail.com')
        this.enterPassword('Sido1234')
        this.clickOnLoginButton()
        cy.contains('Information').click()
        cy.contains('Edit').click()
        this.enterCompanyName('Test Company')
        this.selectProfessionalField()
        this.enterPhoneNumber('123456789')
        this.enterCompanyAddress('Test Address')
        this.enterCompanyDescription('Test Description')
        this.enterCompanyWebsite('TestWebsite.com')
        cy.contains('Cancel').click()
        
    }
}