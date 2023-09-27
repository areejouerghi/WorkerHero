/// <reference types="cypress" />

import {LoginPage} from '../../Pages/Applicant/LoginPage'

const loginPage = new LoginPage()


describe('Login Suite', () => {
    
    beforeEach(() => {
        cy.log('Visit URL')
        cy.visit('https://app.staging.v2.workerhero.com/auth')
    })

    it.only('Login with valid credentials ', () => {
        loginPage.loginWithValidCredentials()
    
    })

    it('Login with invalid email ', () => {
        loginPage.loginWithInvalidEmail()
    })

    it('Login with invalid password ', () => {
        loginPage.loginWithInvalidPassword()
    
    })
})