/// <reference types="cypress" />

import { SignInPage } from "../../Pages/Promoter/Authentification/SignInPage"

const signIn = new SignInPage()

import { ChangeLanguagePage } from "../../Pages/Promoter/ChangeLanguagePage"

const changeLanguage = new ChangeLanguagePage()

describe('Change Language Suite', () => {
    beforeEach(() => {
        cy.log('Visit URL')
        cy.visit('https://promo.staging.v2.workerhero.com/auth')
    })

  it("German Language", () => {
    signIn.loginWithValidCredentials();
    cy.wait(4000)
    changeLanguage.toGermanLanguage();
  });

  it("English Language", () => {
    signIn.loginWithValidCredentials();
    cy.wait(4000)
    changeLanguage.toEnglishLanguage();
  });


})