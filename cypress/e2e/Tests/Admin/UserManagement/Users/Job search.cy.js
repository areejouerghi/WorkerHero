/// <reference types="cypress" />

import { SignInPage } from "../../../../Pages/Admin/Authentification/SignInPage"

const signIn = new SignInPage()

import { SearchPage } from "../../../../Pages/Admin/UserManagement/Users/JobSearchPage"

const search = new SearchPage()

describe('Job search suite', () => {
    beforeEach(() => {
        cy.log('Visit URL')
        cy.visit('https://admin.staging.v2.workerhero.com/auth')
    })

it('Search applicant user', () => {
    
    signIn.loginWithValidCredentials()
    search.searchApplicantUser()
})

})