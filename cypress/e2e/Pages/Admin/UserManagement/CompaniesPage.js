export class CompaniesPage{
    createCompany() {
        cy.log('Click on the burger icon')
        cy.get('.icon-container').click();
        cy.wait(2000)
        cy.log('Click on Companies')
        cy.get(':nth-child(3) > .wrapper > .item-list-wrapper > .ng-star-inserted > .item-wrapper').click();
        cy.wait(4000)
        cy.log('Click on Create Company')
        cy.contains('Create').click();
        cy.wait(2000)
        cy.log('Fill the form')
        cy.log('Enter the company name')
        cy.get('[formcontrolname="name"] > .wh-s-input--container > .wh-s-input').type('Test Company');
        cy.wait(2000)
        cy.log('Enter the company website')
        cy.get('[formcontrolname="website"] > .wh-s-input--container > .wh-s-input').type('https://www.example.com');
        cy.wait(2000)
        cy.log('Enter the company email')
        cy.get('[formcontrolname="email"] > .wh-s-input--container > .wh-s-input').type('test@example.com');
        cy.wait(2000)
        cy.log('Enter the company phone number')
        cy.get('[formcontrolname="phone"] > .wh-s-input--container > .wh-s-input').type('123456789');
        cy.wait(2000)
        cy.log('Enter the company size')
        cy.get('[formcontrolname="companySize"] > .dropdown-container > .default > .ng-select-container > .ng-arrow-wrapper').click();
        cy.get('.ng-option').contains('SMALL').click();
        cy.wait(2000)
        cy.log('Enter the professional fields')
        cy.get('[formcontrolname="professionalFields"] > .dropdown-container > .default > .ng-select-container > .ng-arrow-wrapper').click();
        cy.get('.ng-option').contains('IT').click();
        cy.wait(2000)
        cy.log('Enter the company description')
        cy.get('.ql-editor').type('Test description');
        cy.wait(2000)
        cy.log('Enter the company address')
        cy.get('.autocomplete--input').type('Deutschland, München (Stadt), 80638, München, Nymphenburg, Schloss Nymphenburg 1')
        cy.get('#ngb-typeahead-0-0').type('{enter}')
        cy.wait(2000)
        
        cy.get('[variant="primary"] > .wh-s-button > .loading-wrapper').click();

        cy.wait(8000)
        
    }
}