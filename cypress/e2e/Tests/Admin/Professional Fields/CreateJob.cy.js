/// <reference types="cypress" />

import { SignInPage } from "../../../Pages/Admin/Authentification/SignInPage"

import { ProfessionalFieldsPage } from "../../../Pages/Admin/Professional Fields/CreateJob"

const signIn = new SignInPage()

const professionalFields = new ProfessionalFieldsPage()

describe('Professional fields & Job Types', () => {
    beforeEach(() => {
        cy.log('Visit URL')
        cy.visit('https://admin.staging.v2.workerhero.com/auth')
    })

it('Create a new professional field', () => {
    
    signIn.loginWithValidCredentials()
    professionalFields.createNewProField()
});
it('Edit an existing professional field', () => {
        
        signIn.loginWithValidCredentials()
        professionalFields.editProField()
});
it('Delete a professional field with no associated job types', () => {
            
            signIn.loginWithValidCredentials()
            professionalFields.deleteProField()
});
it('View list of professional fields', () => {
                    
                    signIn.loginWithValidCredentials()
                    professionalFields.viewProField()
});
it('Create a new job type', () => {
                            
                            signIn.loginWithValidCredentials()
                            professionalFields.createNewJobType()
});
it('Edit an existing job type', () => {
                                    
                                    signIn.loginWithValidCredentials()
                                    professionalFields.editJobType()
})
it('Delete a job type with no associations', () => {  
                                            
                                            signIn.loginWithValidCredentials()
                                            professionalFields.deleteJobType()  
})
//now we will do same work for jobs
it('View list of jobs', () => {
                                                    
                                                    signIn.loginWithValidCredentials()
                                                    professionalFields.viewJob()
});

it.only('Create a new job', () => {
                                                        
                                                        signIn.loginWithValidCredentials()
                                                        professionalFields.createNewJob()
});
it('Edit an existing job', () => {
                                                                
                                                                signIn.loginWithValidCredentials()
                                                                professionalFields.editJob()
});

it('Delete a job', () => {
                                                                            
                                                                            signIn.loginWithValidCredentials()
                                                                            professionalFields.deleteJob()
});
})