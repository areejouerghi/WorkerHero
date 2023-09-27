export class CreateUserPage {

    createAdminUser() {
        cy.log('Click on the burger icon')
        cy.get('.icon-container').click();
        cy.wait(2000)
        cy.log('Click on Admins')
        cy.contains('Admins').click();
        cy.wait(2000)
        cy.log('Click on Create Admin')
        cy.contains('Create').click();
        cy.log('Name')
        cy.get('.name-input > .wh-s-input--container > .wh-s-input').type('Test Admin')
        cy.wait(2000)
        cy.log('Last Name')
        cy.get('.lastname-input > .wh-s-input--container > .wh-s-input').type('Test Admin')
        cy.wait(2000)
        cy.log('Email')
        cy.get('.email-input > .wh-s-input--container > .wh-s-input').type('test@2023.com')
        cy.wait(2000)
        cy.log('Password')
        cy.get('.password-input > .wh-s-input--container > .wh-s-input').type('Test1234')
        cy.wait(2000)
        cy.log('Repeat Password')
        cy.get('.repeat-pass-input > .wh-s-input--container > .wh-s-input').type('Test1234')
        cy.wait(2000)
        cy.log('Click on Create Admin button')
        cy.contains('Create user').click();
    }
    createApplicantUser() {
        //Defective
        cy.log('Click on the burger icon')
        cy.get('.icon-container').click();
        cy.wait(2000)
        cy.log('Click on Applicants')
        cy.contains('Applicants').click();
        cy.wait(2000)
        cy.log('Click on Create Applicant')
        cy.contains('Create').click();
        
    }
    createEmployerUser() {
        cy.log('Click on the burger icon')
        cy.get('.icon-container').click();
        cy.wait(2000)
        cy.log('Click on Employers')
        cy.contains('Employers').click();
        cy.wait(5000)
        cy.log('Click on Create Employer')
        cy.contains('Create').click();
        cy.wait(2000)
        cy.log('Name')
        cy.get('.name-input > .wh-s-input--container > .wh-s-input').type('Test Employer')
        cy.wait(2000)
        cy.log('Last Name')
        cy.get('.lastname-input > .wh-s-input--container > .wh-s-input').type('Test Employer')
        cy.wait(2000)
        cy.log('Email')
        cy.get('.email-input > .wh-s-input--container > .wh-s-input').type('test@2023.com')
        cy.wait(2000)
        cy.log('Phone')
        cy.get('.phone-input > .wh-s-input--container > .wh-s-input').type('1234567890')
        cy.log('Role')
        cy.get('.role-input > .dropdown-container > .default > .ng-select-container > .ng-arrow-wrapper').click();
        cy.wait(2000)
        cy.log('Pick Owner')
        cy.get('div.ng-option:contains("Owner")')
        .should('exist')
        .click(); // You can perform any action you need on this element
        cy.log('Password')
        cy.get('.password-input > .wh-s-input--container > .wh-s-input').type('Test1234')
        cy.wait(2000)
        cy.log('Repeat Password')
        cy.get('.repeat-pass-input > .wh-s-input--container > .wh-s-input').type('Test1234')
        cy.wait(2000)
        cy.log('Click on Save button')
        cy.contains('Save').click();


    }
    createPromoterUser() {
        cy.log('Click on the burger icon')
        cy.get('.icon-container').click();
        cy.wait(2000)
        cy.log('Click on Promoters')
        cy.contains('Promoters').click();
        cy.wait(2000)
        cy.log('Click on Create Promoter')
        cy.contains('Create').click();
        cy.wait(2000)
        cy.log('Email')
        cy.get('.top-container > .md > .wh-s-input--container > .wh-s-input').type('test@example.com')
        cy.wait(2000)
        cy.log('Password')
        cy.get('.password-input > .wh-s-input--container > .wh-s-input').type('Test1234')
        cy.wait(2000)
        cy.log('Repeat Password')
        cy.get('[formcontrolname="passwordRepeat"] > .wh-s-input--container > .wh-s-input').type('Test1234')
        cy.wait(2000)
        cy.log('Select Country')
        cy.get('.wrapper.left > .md > .dropdown-container > .default > .ng-select-container > .ng-arrow-wrapper').click();
        cy.wait(2000)
        cy.log('Pick Angola')
        cy.get('div.ng-option:contains("Angola")').click();
        cy.wait(2000)
        cy.log('Phone')
        cy.get('.right > .md > .wh-s-input--container > .wh-s-input').type('12345678')
        cy.wait(2000)
        cy.log('Click on Submit Button')
        cy.contains('Submit').click();
    }
    }
