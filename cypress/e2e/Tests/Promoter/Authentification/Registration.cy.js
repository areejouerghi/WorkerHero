/// <reference types="cypress" />

import { RegistrationPage } from "../../../Pages/Promoter/Authentification/RegistrationPage";

const registration = new RegistrationPage();

describe("Registration Suite", () => {
    beforeEach(() => {
        cy.log("Visit URL");
        cy.visit("https://promo.staging.v2.workerhero.com/auth");
    });
    
    it("Register with valid credentials", () => {
        registration.registerWithValidCredentials();
    });
    });