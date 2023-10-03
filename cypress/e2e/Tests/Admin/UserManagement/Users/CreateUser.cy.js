/// <reference types="cypress" />

import { SignInPage } from "../../../../Pages/Admin/Authentification/SignInPage"

const signIn = new SignInPage()

import { CreateUserPage } from "../../../../Pages/Admin/UserManagement/Users/CreateUserPage"

const createUser = new CreateUserPage()

describe('Create a new user test', () => {

    beforeEach(() => {
        cy.log('Visit URL')
        cy.visit('https://admin.staging.v2.workerhero.com/auth/login')
    })


    it('Create a new admin user', () => {
        signIn.loginWithValidCredentials()
        createUser.createAdminUser()
    })

    it('Create a new applicant user', () => {
        signIn.loginWithValidCredentials()
        cy.wait(4000)
        createUser.createApplicantUser()
    })

    it('Create a new employer user', () => {
        signIn.loginWithValidCredentials()
        createUser.createEmployerUser()
    })

    it.only('Create a new promoter user', () => {
        signIn.loginWithValidCredentials()
        createUser.createPromoterUser()
    })
})