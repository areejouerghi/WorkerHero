export class ResetPass{
clickOnForgotPassword(){
    cy.log('Click on forgot password')
    cy.contains('Forgot password ?').click()
}
enterEmail(email){

   cy.log('Enter email')
    cy.get('input[type="text"][placeholder="Enter your Email"]').type(email)
}
clickOnResetPasswordButton(){
    cy.log('Click on reset password button')
    cy.contains('Send reset email').click()
}

resetPassword(){
    this.clickOnForgotPassword()
    this.enterEmail('hamza.guizani77+12@gmail.com')
    this.clickOnResetPasswordButton()
}

}