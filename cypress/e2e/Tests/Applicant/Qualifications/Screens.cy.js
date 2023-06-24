/// <reference types="cypress" />

import {LoginPage} from '../../../Pages/Applicant/UserManagement/LoginPage';


import {Screen1Page} from '../../../Pages/Applicant/Qualifications/ScreensPage';

import {Screen2Page} from '../../../Pages/Applicant/Qualifications/ScreensPage';

import {Screen3Page} from '../../../Pages/Applicant/Qualifications/ScreensPage';

import {Screen4Page} from '../../../Pages/Applicant/Qualifications/ScreensPage';

import {Screen5Page} from '../../../Pages/Applicant/Qualifications/ScreensPage';

import {Screen6Page} from '../../../Pages/Applicant/Qualifications/ScreensPage';



const loginPage = new LoginPage()

const screen1Page = new Screen1Page()

const screen2Page = new Screen2Page()

const screen3Page = new Screen3Page()

const screen4Page = new Screen4Page()

const screen5Page = new Screen5Page()

const screen6Page = new Screen6Page()




describe('Screens Suite', () => {

    beforeEach(() => {
        cy.log('Visit URL')
        cy.visit('https://app.staging.v2.workerhero.com/auth')
    })

    it('Screen 1 ', () => {
        loginPage.loginWithValidCredentials()
        cy.wait(5000)
        screen1Page.addNationality()
        screen1Page.addGender()
        screen1Page.addDateOfBirth()
        screen1Page.clickNext()
    })
    it('Screen 2 ', () => {
        loginPage.loginWithValidCredentials()
        cy.wait(5000)
        screen2Page.enterStreetAddress()
        cy.wait(2000)
        screen1Page.clickNext()
        cy.wait(2000)

    })
    it('Screen 3 & 4 ', () => {
        loginPage.loginWithValidCredentials()
        cy.wait(5000)
        screen3Page.selectNoDrinvigLicense()
        cy.wait(2000)
        screen1Page.clickNext()
        cy.wait(2000)
        screen4Page.selectWeeklyAvailability()
        screen1Page.clickNext()
        cy.wait(2000)
    })

    it('Screen 5 ', () => {
        loginPage.loginWithValidCredentials()
        cy.wait(5000)
        screen5Page.selectMotherTongue()
        screen5Page.selectGermanLevel()
        screen5Page.selectEnglishLevel()
        screen1Page.clickNext()
        cy.wait(2000)


    })

    it('Screen 6 ', () => {
        loginPage.loginWithValidCredentials()
        cy.wait(5000)
        screen6Page.confirmEnteredData()
        screen1Page.clickNext()
        cy.wait(2000)
    })

   



})