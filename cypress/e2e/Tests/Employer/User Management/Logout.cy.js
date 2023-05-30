/// <reference types="cypress" />

import { LogoutPage } from "../../../Pages/Employer/User Management/LogoutPage";

const logoutPage = new LogoutPage()

describe('Logout Test', () => {
    beforeEach(() => {
        cy.log('Visit URL')
        cy.visit('https://business.staging.v2.workerhero.com/auth')
    })

it('Logout ', () => {
    
    logoutPage.lougout()
    

});
});
