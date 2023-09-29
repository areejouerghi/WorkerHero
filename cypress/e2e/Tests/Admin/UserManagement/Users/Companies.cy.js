/// <reference types="cypress" />

import { SignInPage } from "../../../../Pages/Admin/Authentification/SignInPage"

const signIn = new SignInPage()

import { CompaniesPage } from "../../../../Pages/Admin/UserManagement/CompaniesPage"

const companies = new CompaniesPage()



describe('Create a new company test', () => {

    beforeEach(() => {
        cy.log('Visit URL')
        cy.visit('https://admin.staging.v2.workerhero.com/auth/login')
    })

    it('Create a new company', () => {

        signIn.loginWithValidCredentials()
        companies.createCompany()
    })
    it('Edit a company', () => {

        signIn.loginWithValidCredentials()
        companies.editCompany()
    })

    it.only('Delete a company', () => {
            
            signIn.loginWithValidCredentials()
            companies.deleteCompany()
        })

})
