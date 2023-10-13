export class RegistrationPage{
    registerWithValidCredentials(){
        cy.log('Click on the sign up button')
        cy.contains('Sign up').click()
        cy.get('.name-input > .wh-s-input--container > .wh-s-input').type('Test')
        cy.log('Enter lastname')
        cy.get('.lastname-input > .wh-s-input--container > .wh-s-input').type('Test')
        cy.log('Enter email')
        cy.get('.email-input > .wh-s-input--container > .wh-s-input').type('hamza.guizani77+115@gmail.com')
        cy.log('Select language')
        cy.get('.communication-language > .dropdown-container > .default > .ng-select-container > .ng-arrow-wrapper').click()
        cy.contains('English').click()
        cy.log('Select Country')
        cy.get('.wrapper.left .md .dropdown-container .default .ng-select-container .ng-arrow-wrapper').click()
        .type('Tur')
        cy.contains('Turkey').click()
        cy.log('Enter phone number')
        cy.get('.right > .md > .wh-s-input--container > .wh-s-input').type('52668548')
        cy.log('Enter zip code')
        cy.get('.autocomplete--input').type('Türkiye, Adıyaman, Adıyaman, Adıyaman, Türkiye Petrolleri')
        cy.get('#ngb-typeahead-0-0').type('{enter}')
        cy.log('Enter password')
        cy.get('.password-input > .wh-s-input--container > .wh-s-input').type('Sido1234')
        cy.log('Repeat password')
        cy.get('.repeat-pass-input > .wh-s-input--container > .wh-s-input').type('Sido1234')
        cy.log('Click on the sign up button')
        cy.get('.wh-s-button').click()
        cy.wait(10000)

        
    }
}