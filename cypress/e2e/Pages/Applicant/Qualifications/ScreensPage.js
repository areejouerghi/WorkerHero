export class Screen1Page {
    addNationality(){
        cy.wait(5000)
        cy.get('wh-nationality.grid-child > .ng-dirty > .dropdown-container').click()
        cy.contains('Afghan').click()

    }
    addGender(){
        cy.get('.grid-child.ng-dirty > .dropdown-container > .zero > .ng-select-container > .ng-arrow-wrapper').click()
        cy.contains('MALE').click()
    }
    addDateOfBirth(){
        cy.get('.ng-pristine.ng-invalid > .wh-s-input--container > .wh-s-input').click().type('1990-01-01')
    }

    clickNext(){
        cy.contains('Next').click()
    }
    
}

export class Screen2Page {
    enterStreetAddress(){
        cy.get('input[Placeholder="Start typing your street address"]').click()
        .type('Deutschland, Berlin, Berlin, 10117, Berlin, Mohrenstraße 37{enter}')
        cy.get('#ngb-typeahead-0-0').click()
    }



}

export class Screen3Page {
    selectNoDrinvigLicense(){
        cy.get('.wh-toggle--slider').click()
    }


}

export class Screen4Page {

    selectWeeklyAvailability(){
        //Monday to Friday : Morning Shift
        cy.contains('Morning Shift').click()
        //Saturday : Late Shift
        cy.get('#panel-1-header > .accordion-button').click()
        cy.contains('Late Shift').click()
        //Sunday : Night Shift
        cy.get('#panel-2-header > .accordion-button').click()
        cy.contains('Night shift').click({force: true})
    }
    
}

export class Screen5Page {
    selectMotherTongue(){
    cy.get('.test > .dropdown-container > .zero > .ng-select-container > .ng-arrow-wrapper').click()
    cy.contains('English').click()
    }
    selectGermanLevel(){
    cy.get(':nth-child(2) > .ng-untouched > .dropdown-container > .zero > .ng-select-container > .ng-arrow-wrapper').click()
    cy.contains('BEGINNER').click({force: true})
    }
    selectEnglishLevel(){
    cy.get(':nth-child(3) > .ng-untouched > .dropdown-container > .zero > .ng-select-container > .ng-arrow-wrapper').click()
    cy.contains('ADVANCED').click({force: true})
    }


}

export class Screen6Page {
    confirmEnteredData(){
        cy.contains('Make your profile outstanding').click()
    }

}

