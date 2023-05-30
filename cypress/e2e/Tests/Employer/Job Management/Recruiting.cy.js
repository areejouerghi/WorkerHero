/// <reference types="cypress" />

import { RecruitingPage } from "../../../Pages/Employer/Job Management/RecruitingPage";

const recruitingPage = new RecruitingPage()

describe('Recruiting Test', () => {
    beforeEach(() => {
        cy.log('Visit URL')
        cy.visit('https://business.staging.v2.workerhero.com/auth')
    })

it('Recruiting ', () => {
    
    
    recruitingPage.verifyJobCreated()
    



});
});