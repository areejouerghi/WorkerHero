export class LogoutPage{
    clickOnLogoutButton() {

        cy.get('p.ng-tns-c43-0').click();
    }
    verifyRedirectToSignInPage() {
        cy.log('Verify that the user is logged out')
        cy.url().should('include', '/sign-in');
        cy.wait(2000)
    }
    logout() {
        this.clickOnLogoutButton()
        this.verifyRedirectToSignInPage();
    }
}