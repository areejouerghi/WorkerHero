/// <reference types="cypress" />

import { CompanyProfilePage } from "../../../Pages/Employer/Job Management/CompanyProfilePage"

const companyProfile = new CompanyProfilePage()

describe('Company Profile Suite', () => {

    beforeEach(() => {
        cy.log('Visit URL')
        cy.visit('https://business.staging.v2.workerhero.com/auth')
    })

it('Edit Cancel Test', () => {

    companyProfile.updateCompanyProfile()

    
})
})