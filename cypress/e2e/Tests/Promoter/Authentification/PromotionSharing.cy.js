/// <reference types="cypress" />

import { SignInPage } from "../../../Pages/Promoter/Authentification/SignInPage"

const signIn = new SignInPage()

import { PromotionsPage } from "../../../Pages/Admin/UserManagement/PromotionsPage"

const promotion = new PromotionsPage()

describe('Promotion Sharing', () => {
    beforeEach(() => {
        cy.log('Visit URL')
        cy.visit('https://promo.staging.v2.workerhero.com/auth')
    })

  it("Redirection to V1 app upon applying", () => {
    signIn.loginWithValidCredentials();
    promotion.shareMyPromotions();
    promotion.applyPromotion();
  })
  it.only('Participate in promotion with existing account', () => {
    signIn.loginWithValidCredentials();
    promotion.partacipateInPromotion();
    
  })
});