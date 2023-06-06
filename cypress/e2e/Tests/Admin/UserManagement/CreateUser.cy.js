/// <reference types="cypress" />

import { SignInPage } from "../../../Pages/Admin/SignInPage"

const signIn = new SignInPage()

import { CreateUserPage } from "../../../Pages/Admin/UserManagement/CreateUserPage"

const createUser = new CreateUserPage()


describe('Create a new user test', () => {

    beforeEach(() => {
        cy.log('Visit URL')
        cy.visit('https://business.staging.v2.workerhero.com/auth')
    })

it('Sign in then create a user with valid information', () => {
    
    signIn.loginWithValidCredentials()
    createUser.createNewUser()


});
})