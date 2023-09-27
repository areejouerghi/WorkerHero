export class EditUserPage{
    editAdminUser() {
        cy.log('Click on the burger icon')
        cy.get('.icon-container').click();
        cy.wait(2000)
        cy.log('Click on Admins')
        cy.contains('Admins').click();
        cy.wait(2000)
        cy.log('Click on the edit icon')
        cy.get(':nth-child(1) > .action-column')
        .find('[name="edit-3"]')
        .click();
        cy.wait(2000)
        cy.log('Edit the first name')
        cy.get('[formcontrolname="firstName"] > .wh-s-input--container > .wh-s-input').clear().type('Surname edited');
        cy.wait(2000)
        cy.log('Edit the last name')
        cy.get('[formcontrolname="lastName"] > .wh-s-input--container > .wh-s-input').clear().type('Name edited');
        cy.wait(2000)
        cy.log('Edit the email')
        cy.get('[formcontrolname="email"] > .wh-s-input--container > .wh-s-input').clear().type('test@gmail.com');
        cy.wait(2000)
        cy.log('Submit the changes')
        cy.contains('Edit user').click();
        cy.wait(4000)
        cy.log('Verify new name')
        cy.contains('Surname edited').should('be.visible');
        cy.wait(2000)
    }
    editApplicantUser() {
        //Defective
        cy.log('Click on the burger icon')
        cy.get('.icon-container').click();
        cy.wait(2000)
        cy.log('Click on Applicants')
        cy.contains('Applicants').click();
        cy.wait(2000)
        cy.log('Click on the edit icon')
        cy.get(':nth-child(2) > .action-column')
        .find('[name="edit-3"]')
        .click();
        cy.wait(2000)
        cy.log('Edit the first name')

    }
    editEmployerUser() {
        cy.log('Click on the burger icon')
        cy.get('.icon-container').click();
        cy.wait(2000)
        cy.log('Click on Employers')
        cy.contains('Employers').click();
        cy.wait(2000)
        cy.log('Click on the edit icon')
        cy.get(':nth-child(2) > .action-column')
        .find('[name="edit-3"]')
        .click();
        cy.wait(2000)
        cy.log('Edit the first name')
        cy.get('[formcontrolname="firstName"] > .wh-s-input--container > .wh-s-input').clear().type('Surname edited');
        cy.wait(2000)
        cy.log('Edit the last name')
        cy.get('[formcontrolname="lastName"] > .wh-s-input--container').clear().type('Name edited');
        cy.wait(2000)
        cy.log('Edit the email')
        cy.get('[formcontrolname="email"] > .wh-s-input--container').clear().type('test@gmail.com')
        cy.wait(2000)
        cy.log('Edit the phone number')
        cy.get('[formcontrolname="phoneNumber"] > .wh-s-input--container > .wh-s-input').clear().type('+21612345678');
        cy.wait(2000)
        cy.log('Edit Status')
        cy.get('.admin-user-form > .ng-dirty > .dropdown-container > .default > .ng-select-container > .ng-arrow-wrapper').click();
        cy.wait(2000)
        cy.get('.ng-option').contains('Employer').click();
        cy.wait(2000)
        cy.log('Save the changes')
        cy.contains('Save').click();
        cy.wait(4000)
        }

    editPromoterUser() {
        cy.log('Click on the burger icon')
        cy.get('.icon-container').click();
        cy.wait(2000)
        cy.log('Click on Promoters')
        cy.contains('Promoters').click();
        cy.wait(4000)
        cy.log('Click on the edit icon')
        cy.get(':nth-child(5) > .action-column')
        .find('[name="edit-3"]')
        .click();
        cy.wait(2000)
        cy.log('Edit the email')
        cy.get('.top-container > .md > .wh-s-input--container > .wh-s-input').clear().type('email@test.com');
        cy.wait(2000)
        cy.log('Edit the password')
        cy.get('.password-input > .wh-s-input--container > .wh-s-input').clear().type('123456');
        cy.wait(2000)
        cy.log('Edit repeat password')
        cy.get('[formcontrolname="passwordRepeat"] > .wh-s-input--container > .wh-s-input').clear().type('123456');
        cy.wait(2000)
        cy.log('Submit the changes')
        cy.contains('Submit').click();
        cy.wait(4000)

        
        

    }


}