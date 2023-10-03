export class ProfessionalFieldsPage{

    createNewProField(){
    cy.log('Click on the burger icon')
    cy.get('.icon-container').click();
    cy.wait(2000)
    cy.log('Click on the Professional Fields')
    cy.contains('Professional Fields').click();
    cy.wait(2000)
    cy.log('Click on create button')
    cy.contains('Create').click();
    cy.wait(2000)
    cy.log('Enter the name of the Professional Field')
    cy.get('.grid-child.default > .wh-s-input--container > .wh-s-input').type('Test Pro Field');
    cy.wait(2000)
    cy.log('Select Status');
    cy.get('.admin-user-form > .ng-dirty > .dropdown-container > .ng-select-searchable > .ng-select-container > .ng-arrow-wrapper').click();
    cy.wait(2000)
    cy.log('Select Public');
    cy.get('.ng-option').contains('Public').click();
    cy.wait(2000)
    cy.log('Submit the form');
    cy.contains('Submit').click();
    cy.wait(2000)
    cy.log('Verify that the Professional Field is created');
    cy.contains('Test Pro Field').should('be.visible');

}
editProField(){
    cy.log('Click on the burger icon')
    cy.get('.icon-container').click();
    cy.wait(2000)
    cy.log('Click on the Professional Fields')
    cy.contains('Professional Fields').click();
    cy.wait(2000)
    cy.log('Click on the edit button')
    cy.get('td.action-column [name="edit-3"]').eq(0).click();
    cy.wait(2000)   
    cy.log('Edit name')
    cy.get('.grid-child-full-width > .md > .wh-s-input--container > .wh-s-input').clear().type('Test Pro Field Edited');
    cy.wait(2000)
    cy.log('Select Status');
    cy.get('.admin-user-form > .ng-dirty > .dropdown-container > .ng-select-searchable > .ng-select-container > .ng-arrow-wrapper').click();
    cy.wait(2000)
    cy.log('Select Private');
    cy.get('.ng-option').contains('Private').click();
    cy.wait(2000)
    cy.log('Edit Slug')
    cy.get('.grid-child.ng-pristine > .wh-s-input--container').clear().type('test-pro-field-edited');
    cy.log('Submit the form');
    cy.contains('Submit').click();
    cy.wait(2000)
    cy.log('Verify that the Professional Field is edited');
    cy.contains('Test Pro Field Edited').should('be.visible');
    cy.wait(2000)
}

deleteProField(){
    cy.log('Click on the burger icon')
    cy.get('.icon-container').click();
    cy.wait(2000)
    cy.log('Click on the Professional Fields')
    cy.contains('Professional Fields').click();
    cy.wait(2000)
    cy.log('Click on the delete button')
    cy.get('td.action-column [name="trash-2"]').each(($element) => {
        cy.wrap($element).click({ force: true }); // Click each element individually
      });      
    cy.wait(2000)
    cy.log('Click on the delete button')
    cy.contains('Delete').click();
    cy.wait(2000)


}

viewProField(){
    cy.log('Click on the burger icon')
    cy.get('.icon-container').click();
    cy.wait(2000)
    cy.log('Click on the Professional Fields')
    cy.contains('Professional Fields').click();
    cy.wait(2000)
    //check that list exists
    cy.log('Verifying the title exists');
    cy.contains('Professional field list').should('be.visible');
    cy.log('Verify that the Professional Fields list exists');
    cy.get('.main-page').should('be.visible');
    cy.wait(2000)
}
createNewJobType(){
        cy.log('Click on the burger icon')
        cy.get('.icon-container').click();
        cy.wait(4000)
        cy.log('Click on Job Types')
        cy.contains('Job types').click();
        cy.wait(2000)
        cy.log('Click on Create button')
        cy.contains('Create').click();
        cy.wait(2000)
        cy.log('Enter the name of the Job Type')
        cy.get('wh-s-text-variant-input.grid-child > .md > .wh-s-input--container > .wh-s-input').type('Test Job Type');
        cy.wait(2000)
        cy.log('Select Status');
        cy.get('.grid-child.ng-valid > .dropdown-container > .default > .ng-select-container > .ng-arrow-wrapper').click();
        cy.wait(2000)
        cy.contains('PRIVATE').click();
        cy.wait(2000)
        cy.log('Enter Slug');
        cy.get('.grid-child.ng-pristine > .wh-s-input--container > .wh-s-input').type('Test Job Type');
        cy.wait(2000)
        cy.log('Select Professional Field');
        cy.get('.ng-select-multiple > .ng-select-container > .ng-arrow-wrapper').click();
        cy.contains('IT Automation').click();
        cy.log('Submit the form');
        cy.contains('Submit').click();
        cy.wait(4000)

}
editJobType(){
        cy.log('Click on the burger icon')
        cy.get('.icon-container').click();
        cy.wait(2000)
        cy.log('Click on Job Types')
        cy.contains('Job types').click();
        cy.wait(2000)
        cy.log('Click on the edit button')
        cy.get(':nth-child(1) > .action-column')
        .find('[name="edit-3"]').click();
        cy.wait(2000)
        cy.log('Edit name')
        cy.get('wh-s-text-variant-input.grid-child > .md > .wh-s-input--container > .wh-s-input').clear().type('Test Job Type Edited');
        cy.wait(2000)
        cy.log('Select Status');
        cy.get('[formcontrolname="status"] > .dropdown-container > .default > .ng-select-container > .ng-arrow-wrapper').click()        
        cy.wait(2000)
        cy.get('[formcontrolname="status"] > .dropdown-container > .default > .ng-select-container > .ng-clear-wrapper').click();
        cy.wait(2000)
        cy.log('Select Private');
        cy.get('.ng-option').contains('PUB').click();
        cy.log('Edit Slug')
        cy.get('.grid-child.ng-pristine > .wh-s-input--container > .wh-s-input').clear().type('test-job-type-edited');
        cy.wait(2000)
        cy.log('Select Professional Field');
        cy.get('.grid-child.ng-star-inserted > .dropdown-container > .default > .ng-select-container > .ng-clear-wrapper').click();
        cy.wait(2000)
        cy.get('.grid-child.ng-star-inserted > .dropdown-container > .default > .ng-select-container > .ng-arrow-wrapper').click();
        cy.wait(2000)
        cy.get('.ng-option').contains('hello').click();
        cy.log('Submit the form');
        cy.contains('Submit').click();
        cy.wait(2000)
}
deleteJobType(){
        cy.log('Click on the burger icon')
        cy.get('.icon-container').click();
        cy.wait(2000)
        cy.log('Click on Job Types')
        cy.contains('Job types').click();
        cy.wait(2000)
        cy.log('Click on the delete button')
        cy.get(':nth-child(5) > .action-column')
        .find('[name="trash-2"]').click();  
        cy.wait(2000)
        cy.log('Click on the delete button')
        cy.contains('Delete').click();
        cy.wait(2000)
}
//now we will do same work for jobs
viewJob(){
        cy.log('Click on the burger icon')
        cy.get('.icon-container').click();
        cy.wait(2000)
        cy.log('Click on Jobs')
        cy.contains('Jobs').click();
        cy.wait(2000)
        //check that list exists
        cy.log('Verifying the title exists');
        cy.contains('Job list').should('be.visible');
        cy.log('Verify that the Jobs list exists');
        cy.get('.main-page').should('be.visible');
        cy.wait(2000)
}
createNewJob(){
        cy.log('Click on the burger icon')
        cy.get('.icon-container').click();
        cy.wait(2000)
        cy.log('Click on Jobs')
        cy.contains('Jobs').click();
        cy.wait(2000)
        cy.log('Click on Create button')
        cy.contains('Create job').click();
        cy.wait(4000)
        //*General Information
        cy.log('General Information Starting');
        //Title
        cy.log('Enter the title of the Job')
        cy.get('.wh-s-input').type('Test Job');
        cy.wait(2000)
        //Type
        cy.log('Select Type');
        cy.get('.ng-invalid > .dropdown-container > .default > .ng-select-container > .ng-arrow-wrapper').click({force: true});
        cy.contains('Software').click();
        //Description
        cy.log('Enter the description of the Job')
        cy.get('.ql-editor').type('Test Job Description');
        cy.wait(2000)
        //Placeholder Street Adress
        cy.log('Enter the Placeholder Street Adress of the Job')
        cy.get('.autocomplete--input').type('Test Job Street Adress');
        cy.wait(2000)
        //*Employment Type
        cy.log('Employment Type Starting');
        //Employment Type : Full Time
        cy.log('Select Employment Type');
        cy.contains('Full time').click();
        cy.wait(2000)
        //*Compensation
        cy.log('Compensation Starting');
        //Add Compensation
        cy.log('Click on Add Compensation');
        cy.contains('+ Add compensation').click();
        cy.wait(2000)
        //Amount
        cy.log('Enter the Amount of the Compensation')
        cy.get('.compensation-item.ng-pristine > .wh-s-input--container > .wh-s-input').clear().type('3000');
        cy.wait(2000)
        // //*Work Experience
        cy.log('Work Experience Starting');
        //Add Work Experience
        cy.log('Click on Add Work Experience');
        cy.contains('+ Add work experience').click();
        cy.wait(2000)
        //Professional Field
        cy.log('Select Professional Field');
        cy.get('[label="Professional Field"] > .dropdown-container > .default > .ng-select-container > .ng-arrow-wrapper').click();
        cy.contains('IT Automation').click();
        cy.wait(2000)
        //Job Type
        cy.log('Select Job Type');
        cy.get('.work-experience-form > [formcontrolname="jobType"] > .dropdown-container > .default > .ng-select-container > .ng-arrow-wrapper').click();
        //get option 
        cy.get('.ng-option').contains('Job type').click();
        cy.wait(2000)
        //Years
        cy.log('Enter the Years of the Work Experience')
        cy.get('.ng-invalid > .wh-s-input--container > .wh-s-input').type('2');
        cy.wait(2000)
        //*Education
        cy.log('Education Starting');
        //Add Education
        cy.log('Click on Add Education');
        cy.get('wh-education.ng-star-inserted > wh-card-admin > wh-s-button.ng-star-inserted > .wh-s-button').click();
        cy.wait(2000)
        //Type
        cy.get('.education-form > .md > .dropdown-container > .default > .ng-select-container > .ng-arrow-wrapper').click();
        cy.contains('ACADEMIC').click();
        cy.wait(2000)
        //Professional Field
        cy.get('.ng-invalid > .dropdown-container > .default > .ng-select-container > .ng-arrow-wrapper').click();
        //option
        cy.contains('hello').click();
        cy.wait(2000)
        //*Driver License
        cy.log('Driver License Starting');
        //Add Driver License
        cy.log('Click on Add Driver License');
        cy.get('.actions > :nth-child(1) > .wh-s-button').click();
        cy.wait(2000)
        //Type
        cy.get('.license-form > .ng-dirty > .dropdown-container > .default > .ng-select-container > .ng-arrow-wrapper').click();
        cy.contains('A2').click();
        //Years
        cy.log('Enter the Years of the Driver License')
        cy.get('.md.ng-pristine > .wh-s-input--container > .wh-s-input').type('2');
        cy.wait(2000)
        //*Certificates
        cy.log('Certificates Starting');
        //Add Certificates
        cy.log('Click on Add Certificate');
        cy.get('.actions > :nth-child(2) > .wh-s-button').click();
        cy.wait(2000)
        cy.get('.dropdown-item > .dropdown-container > .default > .ng-select-container > .ng-arrow-wrapper').click();
        cy.contains('KEY').click();
        cy.wait(2000)
        //*Language
        cy.log('Language Starting');
        //Add Language
        cy.log('Click on Add Language');
        cy.get('wh-languages.ng-star-inserted > wh-card-admin > wh-s-button.ng-star-inserted > .wh-s-button').click();
        cy.get('.language-form > .ng-invalid > .dropdown-container > .default > .ng-select-container > .ng-arrow-wrapper').click({ multiple: true })
        cy.contains('EN').click();
        //Level
        cy.get('[formcontrolname="languageLevel"] > .dropdown-container > .default > .ng-select-container > .ng-arrow-wrapper').click();
        cy.contains('ADVANCED').click();
        //*Recruiting
        cy.log('Recruiting Starting');
        //Add Recruiting
        cy.log('Click on Add Recruiting');
        cy.get('wh-s-icon-button.item > i-feather').click();
        cy.wait(2000)
        //Title
        cy.log('Enter the Title of the Recruiting')
        cy.get('.wh-modal--body > .ng-dirty.ng-invalid > .ng-invalid > .wh-s-input--container > .wh-s-input').type('Test Recruiting');
        cy.wait(2000)
        //Add new step
        cy.log('Click on Add new step');
        cy.contains('Add new step').click();
        //*Publishing
        cy.log('Publishing Starting');
        // //Publishing : Job Ad
        // cy.get(':nth-child(1) > .wh-toggle--container > .wh-toggle > .wh-toggle--slider').click();
        // //Publishing : Recruiting Compaign
        // cy.get(':nth-child(2) > .wh-toggle--container > .wh-toggle > .wh-toggle--slider').click();
        //Publishing : Talent Services
        cy.get(':nth-child(3) > .wh-toggle--container > .wh-toggle > .wh-toggle--slider').click();
        //Company
        cy.get('wh-publish.ng-tns-c117-3 > wh-card-admin > .card-body > form.ng-untouched > .md > .dropdown-container > .default > .ng-select-container > .ng-arrow-wrapper').click();
        cy.contains('TCE').click();
        //Publish Job
        cy.get('.publish-child.ng-star-inserted > .wh-s-checkbox--container > .wh-s-checkbox').click();
        //*Save Job
        cy.log('Save Job');
        cy.contains('Save').click();


}

}