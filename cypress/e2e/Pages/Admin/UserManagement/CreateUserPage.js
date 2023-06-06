export class CreateUserPage {

    naviggateToUsersSection(){
        cy.contains('Users').click()
    }
    clickOnCreateButton(){
        cy.contains('Create').click()
    }
    enterName(name) {
        cy.get('input[type="text"][placeholder="Name"]').type(name)
        }
        enterSurname(surname) {
        cy.get('input[type="text"][placeholder="Surname"]').type(surname)
        }
        enterEmail(email) {
        cy.get('input[type="text"][placeholder="Email"]').type(email)
        }
        enterPassword(password) {
        cy.get('input[type="password"][placeholder="Password"]').type(password)
        }
        enterRepeatPassword(repeatPassword) {
        cy.get('input[type="password"][placeholder="Repeat password"]').type(repeatPassword)
        }
        enterPhoneNumber(phoneNumber) {
            cy.get('input[type="text"][placeholder="Phone"]').type(phoneNumber)
        }
        displayRoleList(role) {
            cy.get('.zero > .ng-select-container > .ng-arrow-wrapper').click()
        }
        selectRole(selector,role) {

            cy.get(selector)
              cy.contains(role)
                .click();
            }
          
              

        
        clickCreateUserButton() {
        cy.contains('Create User').click();
        }

        createNewUser(){
        this.naviggateToUsersSection()
        this.clickOnCreateButton()
        this.enterName('name');
        this.enterSurname('surname');
        this.enterEmail('example1@example.com');
        this.enterPassword('Sido1234');
        this.enterRepeatPassword('Sido1234');
        this.enterPhoneNumber(52668548);
        this.displayRoleList()
        this.selectRole('#a2e89f06015d-0 > .ng-option-label','Owner')
        this.clickCreateUserButton();
        }
    }
