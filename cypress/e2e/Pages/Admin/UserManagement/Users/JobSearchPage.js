export class SearchPage{
    searchApplicantUser() {
        cy.log('Click on the burger icon')
        cy.get('.icon-container').click();
        cy.wait(2000)
        cy.log('Click on Applicants')
        cy.contains('Applicants').click();
        cy.wait(2000)
        cy.log('Search for the applicant user')
        cy.get('.wh-s-input').type('Test');
        cy.wait(2000)
        cy.log('Click on the search button')
        cy.get('.wh-s-button').should('be.visible')
        .should('be.enabled').click();
        cy.wait(2000)
        cy.log('Verify the user was found')
        cy.contains('Test').should('be.visible');
        cy.wait(4000)
    }
}