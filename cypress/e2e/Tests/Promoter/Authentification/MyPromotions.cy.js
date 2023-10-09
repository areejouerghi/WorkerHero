/// <reference types="cypress" />

import { SignInPage } from "../../../Pages/Promoter/Authentification/SignInPage"

const signIn = new SignInPage()

import { PromotionsPage } from "../../../Pages/Admin/UserManagement/PromotionsPage"

const promotion = new PromotionsPage()

describe('My Promotions Suite', () => {
    beforeEach(() => {
        cy.log('Visit URL')
        cy.visit('https://promo.staging.v2.workerhero.com/auth')
    })

  it("View all promotions of a promoter", () => {
    signIn.loginWithValidCredentials();
    promotion.viewMyPromotions();
  })

  it.only("Share information of a promotion", () => {
    signIn.loginWithValidCredentials();
    cy.wait(2000)
    promotion.shareMyPromotions();
  });
});
