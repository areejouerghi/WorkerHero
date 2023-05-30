/// <reference types="cypress" />

import { GeneralInformationPage } from "../../../Pages/Employer/Job Management/GeneralInformationPage";

const generalInformation = new GeneralInformationPage();

describe('General Information Test', () => {
    beforeEach(() => {
        cy.log('Visit URL')
        cy.visit('https://business.staging.v2.workerhero.com/auth')
    })

it('General Information Checks ', () => {
    generalInformation.accessToGeneralInformation()
});
});