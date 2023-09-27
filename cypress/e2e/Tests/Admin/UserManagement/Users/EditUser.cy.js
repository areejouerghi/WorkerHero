/// <reference types="cypress" />

import { SignInPage } from "../../../../Pages/Admin/Authentification/SignInPage"

const signIn = new SignInPage()


import { EditUserPage } from "../../../../Pages/Admin/UserManagement/Users/EditUserPage"

const editUser = new EditUserPage()

describe('Edit user suite', () => {
    beforeEach(() => {
        cy.log('Visit URL')
        cy.visit('https://admin.staging.v2.workerhero.com/auth')
    })

it('Edit admin user', () => {
    signIn.loginWithValidCredentials()
    editUser.editAdminUser()
})

it('Edit applicant user', () => {
    signIn.loginWithValidCredentials()
    editUser.editApplicantUser()
})

it('Edit employer user', () => {
    signIn.loginWithValidCredentials()
    editUser.editEmployerUser()
})

it.only('Edit promoter user', () => {
    signIn.loginWithValidCredentials()
    editUser.editPromoterUser()
})

})