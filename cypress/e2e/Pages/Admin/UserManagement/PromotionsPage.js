export class PromotionsPage{

    viewPromotions() {
        cy.log('Click on the burger icon')
        cy.get('.icon-container').click();
        cy.wait(2000)
        cy.log('Click on Promotions')
        cy.get(':nth-child(4) > .wrapper > .item-list-wrapper > .ng-star-inserted > .item-wrapper').click();
        cy.wait(4000)
        
    }    
    verifyPromotions() {
        cy.log('Click on the burger icon')
        cy.get('.icon-container').click();
        cy.wait(2000)
        cy.log('Click on Promotions')
        cy.get(':nth-child(4) > .wrapper > .item-list-wrapper > .ng-star-inserted > .item-wrapper').click();
        cy.wait(4000)
        cy.log('Verify the information of the promotion')
        cy.get(':nth-child(1) > .action-column')
        .find('[name="edit-3"]')
        .click();
        cy.log('Verify ID of the promoter')
        cy.get('[formcontrolname="V1jobId"] > .wh-s-input--container > .wh-s-input').should('have.value', '11')
        cy.wait(2000)
        cy.log('Verify Percentage')
        cy.get('[formcontrolname="percentage"] > .wh-s-input--container > .wh-s-input').should('have.value', '75');
        cy.wait(2000)
        cy.log('Verify Total Payout')
        cy.get('[formcontrolname="totalPayout"] > .wh-s-input--container > .wh-s-input').should('have.value', '86');
        cy.wait(2000)
        cy.get('.admin-user-form > .ng-dirty.ng-valid > .dropdown-container')
        .should('contain', 'Active'); 
        cy.wait(2000)

    }
    createPromotions(){
        cy.log('Click on the burger icon')
        cy.get('.icon-container').click();
        cy.wait(2000)
        cy.log('Click on the Promotions')
        cy.get(':nth-child(4) > .wrapper > .item-list-wrapper > .ng-star-inserted > .item-wrapper').click();
        cy.log('Click on the create button')
        cy.get('.action-wrapper > .ng-tns-c2720209522-3 > button').click();
        cy.wait(2000)
        cy.log('Enter the ID of the promoter')
        cy.get('[formcontrolname="V1jobId"] > .wh-s-input--container > .wh-s-input').type('2000');
        cy.wait(2000)
        cy.log('Enter the percentage')
        cy.get('[formcontrolname="percentage"] > .wh-s-input--container > .wh-s-input').type('75');
        cy.wait(2000)
        cy.log('Enter the total payout')
        cy.get('[formcontrolname="totalPayout"] > .wh-s-input--container > .wh-s-input').type('86');
        cy.wait(2000)
        cy.log('Select the status')
        cy.get('[formcontrolname="status"] > .dropdown-container > .default > .ng-select-container > .ng-arrow-wrapper').click();
        cy.get('.ng-option-label')
         .contains('Active')
        .click();
        cy.wait(2000)
        cy.log('Select the promotion')
        cy.get('[formcontrolname="promoters"] > .dropdown-container > .default > .ng-select-container > .ng-arrow-wrapper').click();
        cy.contains('10006').click();
        cy.log('Click on the create promotion button')
        cy.get('[variant="primary"] > .wh-s-button').click();
        cy.wait(4000)

    }

        editPromotions(){
        cy.log('Click on the burger icon')
        cy.get('.icon-container').click();
        cy.wait(2000)
        cy.log('Click on the Promotions')
        cy.get(':nth-child(4) > .wrapper > .item-list-wrapper > .ng-star-inserted > .item-wrapper').click();
        cy.log('Click on the edit button')
        cy.get(':nth-child(1) > .action-column')
        .find('[name="edit-3"]')
        .click();
        cy.wait(2000)
        cy.log('Enter the ID of the promoter')
        cy.get('[formcontrolname="V1jobId"] > .wh-s-input--container > .wh-s-input').clear().type('11');
        cy.wait(2000)
        cy.log('Enter the percentage')
        cy.get('[formcontrolname="percentage"] > .wh-s-input--container > .wh-s-input').clear().type('75');
        cy.wait(2000)
        cy.log('Enter the total payout')
        cy.get('[formcontrolname="totalPayout"] > .wh-s-input--container > .wh-s-input').clear().type('86');
        cy.wait(2000)
        cy.log('Select the status')
        cy.get('[formcontrolname="status"] > .dropdown-container > .default > .ng-select-container > .ng-arrow-wrapper').click();
        cy.get('.ng-option-label')
         .contains('Inactive')
        .click();
        cy.wait(2000)
        cy.log('Select the promotion')
        cy.get('[formcontrolname="promoters"] > .dropdown-container > .default > .ng-select-container > .ng-arrow-wrapper').click();
        cy.contains('sign').click();
        cy.log('Click on the save button')
        cy.get('[variant="primary"] > .wh-s-button').click();
        cy.wait(4000)


        }
        deletePromotions(){
            cy.log('Click on the burger icon')
        cy.get('.icon-container').click();
        cy.wait(2000)
        cy.log('Click on the Promotions')
        cy.get(':nth-child(4) > .wrapper > .item-list-wrapper > .ng-star-inserted > .item-wrapper').click();
        cy.log('Click on the trash icon')
        cy.get(':nth-child(1) > .action-column')
        .find('[name="trash-2"]')
        .click();
        cy.wait(2000)
        cy.log('Click on the delete button')
        cy.get('.delete-btn > .wh-s-button').click();
        cy.wait(8000)
        }
        viewMyPromotions(){
            cy.log('Click on the burger icon')
            cy.get('.icon-container').click();
            cy.wait(2000)
            cy.log('Click on My Promotions')
            cy.get(':nth-child(2) > .wrapper > .item-list-wrapper > :nth-child(1) > .item-wrapper').click();
            cy.wait(4000)
            cy.get('main').scrollTo('bottom')
            cy.wait(3000)
        }
        shareMyPromotions(){
            cy.log('Click on the burger icon')
            cy.get('.icon-container').click();
            cy.wait(2000)
            cy.log('Click on My Promotions')
            cy.get(':nth-child(2) > .wrapper > .item-list-wrapper > :nth-child(1) > .item-wrapper').click();
            cy.wait(4000)
            cy.get('main').scrollTo('bottom')
            cy.wait(3000)
            cy.log('Click on Share Now')
            cy.get(':nth-child(1) > .card > .cta-btn > .wh-s-button').click();
            cy.wait(4000)

        }
        verifyMyPromotions(){
            cy.log('Click on the burger icon')
            cy.get('.icon-container').click();
            cy.wait(2000)
            cy.log('Click on My Promotions')
            cy.get(':nth-child(2) > .wrapper > .item-list-wrapper > :nth-child(1) > .item-wrapper').click();
            cy.wait(4000)
            cy.get('main').scrollTo('bottom')
            cy.log('Verify the information of the promotion')
            cy.log('Verify company name')
            cy.get('.company-name').should('contain', 'Food')
            cy.wait(2000)
            cy.log('Verify bonus')
            cy.get('.bonus-amount').should('contain', '86')
            cy.wait(2000)
            cy.log('Verify address')
            cy.get('.address').should('contain', '60325, Frankfurt am Main')
            cy.wait(3000)

        }
        applyPromotion(){
            cy.log('Redirection to V1 app upon applying')
            cy.contains('Apply ').click();
            cy.wait(20000)

        }
        partacipateInPromotion(){
            cy.log('Click on the burger icon')
            cy.get('.icon-container').click();
            cy.wait(2000)
            cy.log('Click on All promotions')
            cy.get(':nth-child(2) > .item-wrapper').click();
            cy.wait(4000)
            cy.log('Click on Let\'s go')
            cy.contains('Let\'s go').click();
            cy.wait(4000)
            

        }


}