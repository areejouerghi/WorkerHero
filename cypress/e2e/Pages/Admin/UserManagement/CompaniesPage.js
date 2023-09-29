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
    editCompany(){
        cy.log('Click on the burger icon')
        cy.get('.icon-container').click();
        cy.wait(2000)
        cy.log('Click on Companies')
        cy.get(':nth-child(3) > .wrapper > .item-list-wrapper > .ng-star-inserted > .item-wrapper').click();
        cy.wait(4000)
        cy.log('Click on Edit')
        cy.get(':nth-child(14) > .action-column')
        .find('[name="edit-3"]').click();
        cy.wait(2000)
        cy.log('Edit the company name')
        cy.get('[formcontrolname="name"] > .wh-s-input--container > .wh-s-input').clear().type('Test Company Edited');
        cy.wait(2000)
        cy.log('Edit the company website')
        cy.get('[formcontrolname="website"] > .wh-s-input--container > .wh-s-input').clear().type('https://www.example.com');
        cy.wait(2000)
        cy.log('Edit the company email')
        cy.get('[formcontrolname="email"] > .wh-s-input--container > .wh-s-input').clear().type('edited.example.com');
        cy.wait(2000)
        cy.log('Edit the company phone number')
        cy.get('[formcontrolname="phone"] > .wh-s-input--container > .wh-s-input').clear().type('123456789');
        cy.wait(2000)
        cy.log('Edit the company size')
        cy.get('[formcontrolname="companySize"] > .dropdown-container > .default > .ng-select-container > .ng-arrow-wrapper').click();
        cy.get('.ng-option').contains('LARGE').click();
        cy.wait(2000)
        cy.log('Edit the professional fields')
        cy.get('[formcontrolname="professionalFields"] > .dropdown-container > .default > .ng-select-container > .ng-arrow-wrapper').click();
        cy.get('.ng-option').contains('Hospitality').click();
        cy.wait(2000)
        cy.log('Edit the company description')
        cy.get('.ql-editor').clear().type('Test description edited');
        cy.wait(2000)
        // cy.log('Edit the company address')
        // cy.get('.autocomplete--input').clear().type('Deutschland, München (Stadt), 80638, München, Nymphenburg, Schloss Nymphenburg 3')
        // cy.get('#ngb-typeahead-0-0').type('{enter}')
        cy.wait(2000)
        cy.log('Save the changes')
        cy.get('[variant="primary"] > .wh-s-button > .loading-wrapper')
        .click();
        cy.wait(8000)
    }

    deleteCompany(){
        cy.log('Click on the burger icon')
        cy.get('.icon-container').click();
        cy.wait(8000)
        cy.log('Click on Companies')
        cy.get(':nth-child(3) > .wrapper > .item-list-wrapper > .ng-star-inserted > .item-wrapper > .title-wrapper').click();
        cy.wait(4000)
        cy.log('Click on Delete')
        cy.get(':nth-child(10) > .action-column')
        .find('[name="trash-2"]').click();
        cy.wait(2000)
        cy.log('Confirm the deletion')
        cy.contains('Delete').click();
        cy.wait(3000)
        cy.log('Verify the deletion')
        cy.contains('Company has been successfully deleted.')
        cy.wait(2000)
    }

    }
