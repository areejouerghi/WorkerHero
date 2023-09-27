export class DeleteUserPage{
    deleteAdminUser() {
        cy.log('Click on the burger icon')
        cy.get('.icon-container').click();
        cy.wait(2000)
        cy.log('Click on Admins')
        cy.contains('Admins').click();
        cy.wait(2000)
        cy.log('Click on the delete icon')
        cy.get(':nth-child(4) > .action-column')
        .find('[name="trash-2"]')
        .click();
        cy.wait(2000)
        cy.log('Click on the delete button')
        cy.contains('Delete').click();
        cy.wait(4000)
        
    }

    deleteApplicantUser() {
        cy.log('Click on the burger icon')
        cy.get('.icon-container').click();
        cy.wait(2000)
        cy.log('Click on Applicants')
        cy.contains('Applicants').click();
        cy.wait(2000)
        cy.log('Click on the delete icon')
        cy.get(':nth-child(2) > .action-column')
        .find('[name="trash-2"]')
        .click();
        cy.wait(2000)
        cy.log('Click on the delete button')
        cy.contains('Delete').click();
        cy.wait(2000)
        
    }

    deleteEmployerUser() {
        cy.log('Click on the burger icon')
        cy.get('.icon-container').click();
        cy.wait(2000)
        cy.log('Click on Employers')
        cy.contains('Employers').click();
        cy.wait(2000)
        cy.log('Click on the delete icon')
        cy.get(':nth-child(2) > .action-column')
        .find('[name="trash-2"]')
        .click();
        cy.wait(2000)
        cy.log('Click on the delete button')
        cy.contains('Delete').click();
        cy.wait(2000)
        
    }

    deletePromoterUser() {
        cy.log('Click on the burger icon')
        cy.get('.icon-container').click();
        cy.wait(2000)
        cy.log('Click on Promoters')
        cy.contains('Promoters').click();
        cy.wait(2000)
        cy.log('Click on the delete icon')
        cy.get(':nth-child(2) > .action-column')
        .find('[name="trash-2"]')
        .click();
        cy.wait(2000)
        cy.log('Click on the delete button')
        cy.contains('Delete').click();
        cy.wait(2000)
        cy.log('Verify the user was deleted')
        cy.contains('Promoter account successfully deleted').should('be.visible');
        cy.wait(4000)
    }


}