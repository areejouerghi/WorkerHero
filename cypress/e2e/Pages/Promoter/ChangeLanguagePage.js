export class ChangeLanguagePage{
    toGermanLanguage(){
        cy.log('Click on the language button')
        cy.get('.ng-input').click()
        cy.log('Click on the German language')
        cy.contains('German').click()
        cy.wait(4000)
        cy.log('Verify the language')
        cy.get('.right').should('contain', 'German')
        cy.log('Verify Welcome Message')
        cy.contains('Willkommen im WorkerHero PromoClub ‍🚀').should('be.visible')
        cy.wait(2000)
        cy.log('Verify the text of the button')
        cy.get('.wh-s-button').should('contain', 'Los geht')
        cy.log('Verify the text link')
        cy.contains('Klicken Sie hier').should('be.visible')
    } 

    toEnglishLanguage(){
        cy.log('Verify the language')
        cy.get('.right').should('contain', 'English')
        cy.wait(2000)
        cy.log('Verify Welcome Message')
        cy.contains('Welcome to the WorkerHero PromoClub ‍🚀').should('be.visible')
        cy.wait(2000)
        cy.log('Verify the text of the button')
        cy.get('.wh-s-button').should('contain', 'go 🚀')
        cy.log('Verify the text link')
        cy.contains('Click here').should('be.visible')
    }
    
    
}