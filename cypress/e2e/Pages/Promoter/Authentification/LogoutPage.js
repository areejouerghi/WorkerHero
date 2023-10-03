export class LogoutPage{
    clickLogoutButton() {
        cy.log('Click on the logout button')
        cy.get('.icon-container').click();
        cy.contains('Logout').click();
    }
    VerifyLogout() {
        cy.log('Verify that the user is logged out')
        cy.url().should('include', '/auth');
        cy.wait(2000)
    }
}