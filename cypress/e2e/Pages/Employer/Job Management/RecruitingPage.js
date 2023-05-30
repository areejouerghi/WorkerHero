export class RecruitingPage {
enterEmail(email) {
    
    cy.get('input[type="text"][placeholder="Email"]').type(email)
}
enterPassword(password) {
    cy.get('input[type="password"][placeholder="Password"]').type(password)
}
clickOnLoginButton() {
    cy.get('[variant="primary"] > .wh-s-button').click();
}
loginWithValidCredentials() {
    this.enterEmail('hamza.guizani77+12@gmail.com')
    this.enterPassword('Sido1234')
    this.clickOnLoginButton()
}
verifyRedirectToRecruitingPage(){
    
    cy.contains('Recruiting').click();
    cy.wait(2000)
    cy.contains('Jobs').click();
    cy.wait(2000)
    cy.log('Verify that the user is on the recruiting page')
    cy.url().should('include', '/recruiting/jobs');
}
createJob(job,description,adress,amountFrom,amountTo,currency){
    cy.log('Navigate to the create job page')
    cy.wait(2000)
    cy.visit('https://business.staging.v2.workerhero.com/recruiting/jobs/job/create')
    cy.wait(2000)
    cy.log('Verify that the user is on the create job page')
    cy.wait(2000)
    //Job title
    cy.get('input[Placeholder="Enter the name of your job"]').type(job)
    cy.wait(2000)
    //Job category
    cy.get('.zero > .ng-select-container > .ng-arrow-wrapper').click();
    cy.wait(2000)
    //Job description
    cy.get('.ql-editor').type(description)
    cy.wait(2000)
    //Job adress
    cy.get('input[Placeholder="Enter address of the job"]').type(adress)
    cy.wait(2000)
    cy.log('Choosing employment type')
    cy.contains('Contractor').should('be.visible').click();
    cy.wait(2000)
    cy.log('Adding a compensation')
    cy.contains('+ Add compensation').should('be.visible').click();
    cy.wait(2000)
    cy.get('.action-container > .ng-untouched > .dropdown-container > .zero > .ng-select-container > .ng-arrow-wrapper').click();
    cy.wait(2000)
    cy.contains('SALARY_RANGE').should('be.visible').click();
    cy.wait(2000)
    cy.get('[label="Amount From"] > .wh-s-input--container > .wh-s-input').clear().type(amountFrom);
    cy.wait(2000)
    cy.get('[label="Amount To"] > .wh-s-input--container > .wh-s-input').clear().type(amountTo);
    cy.wait(2000)
    cy.get('[label="Currency"] > .dropdown-container > .zero > .ng-select-container > .ng-arrow-wrapper').click();
    cy.wait(2000)
    cy.contains(currency).should('be.visible').click();
    cy.wait(2000)
    cy.get('[label="Interval"] > .dropdown-container > .zero > .ng-select-container > .ng-arrow-wrapper').click();
    cy.wait(2000)
    cy.contains('HOURLY').should('be.visible').click();
    cy.wait(2000)
    cy.contains('Next').should('be.visible').click();
    cy.wait(4000)
}
verifyJobCreated(){
    this.loginWithValidCredentials()
    this.verifyRedirectToRecruitingPage()
    this.createJob('job','description','adress','100','200','CHF')
}
}