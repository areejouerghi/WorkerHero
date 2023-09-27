export class LogoutPage{
    logout() {
        cy.log('Click on the burger icon')
        cy.get('.icon-container').click();
        cy.wait(2000)
        cy.log('Click on logout')
        cy.contains('Logout').click();
        cy.wait(2000)
    }
}