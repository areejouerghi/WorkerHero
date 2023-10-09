/// <reference types="cypress" />

import { SignInPage } from "../../../Pages/Admin/Authentification/SignInPage"

const signIn = new SignInPage()

import { PromotionsPage } from "../../../Pages/Admin/UserManagement/PromotionsPage"

const promotion = new PromotionsPage()

describe('Promotion suite', () => {

    beforeEach(() => {
        cy.log('Visit URL')
        cy.visit('https://admin.staging.v2.workerhero.com/auth')
    })

it('View all promotions of a promoter', () => {

    signIn.loginWithValidCredentials()
    promotion.viewPromotions()
})

it('Verify information of a promotion', () => {
    
    signIn.loginWithValidCredentials()
    promotion.verifyPromotions()
})

it.only('Create a promotion', () => {
        
        signIn.loginWithValidCredentials()
        promotion.createPromotions()
});

it('Edit a promotion', () => {
        
    signIn.loginWithValidCredentials()
    promotion.editPromotions()
})

it('Delete a promotion', () => {

    signIn.loginWithValidCredentials()
    promotion.deletePromotions()

})
})
