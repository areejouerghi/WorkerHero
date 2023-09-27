/// <reference types="cypress" />

import { SignInPage } from "../../../../Pages/Admin/Authentification/SignInPage"

const signIn = new SignInPage()

import { DeleteUserPage } from "../../../../Pages/Admin/UserManagement/Users/DeleteUserPage"

const deleteUser = new DeleteUserPage()

describe('Delete a user test', () => {

    beforeEach(() => {
        cy.log('Visit URL')
        cy.visit('https://admin.staging.v2.workerhero.com/auth/')
    })

    it('Delete an admin user', () => {
        signIn.loginWithValidCredentials()
        deleteUser.deleteAdminUser()
    })

    it('Delete an applicant user', () => {
        signIn.loginWithValidCredentials()
        deleteUser.deleteApplicantUser()
    })

    it('Delete an employer user', () => {
        signIn.loginWithValidCredentials()
        deleteUser.deleteEmployerUser()
    })

    it.only('Delete a promoter user', () => {
        signIn.loginWithValidCredentials()
        deleteUser.deletePromoterUser()
    })

})