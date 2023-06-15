/// <reference types="cypress" />

import { RegistrationPage } from "../../../Pages/Employer/UserManagement/RegistrationPage";

const registrationPage = new RegistrationPage()

describe('Registration Suite', () => {

    beforeEach(() => {
        cy.log('Visit URL')
        cy.visit('https://business.staging.v2.workerhero.com/auth')
    })

    it('Register with valid credentials', () => {
        
        registrationPage.registerWithValidCredentials()

    })
    it('Register with invalid email format ', () => {

        registrationPage.registerWithInvalidEmailFormat()

    })

    it('Register with invalid phone number format ', () => {

        registrationPage.registerWithInvalidPhoneNumberFormat()
    })

    it('Register with non matching passwords format ', () => {
            
            registrationPage.registerWithNonMatchingPasswords()
        })

    it('Register with weak passwords format ', () => {

            registrationPage.registerWithWeakPassword()
        })

    it('Register with duplicate email format ', () => {

        registrationPage.registerWithDuplicateEmail()

    })

    it('Register with empty fields ', () => {

            registrationPage.registerWithEmptyFields()
        })

    



})