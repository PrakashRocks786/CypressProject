const login_Element= require("../PageElements/blueLionLoginElement.json")
export class blueLionLoginAction{

      mobileNumber(phoneNumber){
        cy.get(login_Element.loginElementLocators.mobileNumber).type(phoneNumber)
      }

      submitLogin(){
        cy.get(login_Element.loginElementLocators.submitButton).click()
        return
      }

      OTPFirst(FirstDigit){
        cy.get(login_Element.loginElementLocators.FirstOTP).type(FirstDigit)
      }

      OTPSecond(SecondDigit){
        cy.get(login_Element.loginElementLocators.SecondOTP).type(SecondDigit)
      }

      OTPThird(ThirdDigit){
        cy.get(login_Element.loginElementLocators.ThirdOTP).type(ThirdDigit)
      }

      OTPFourth(FourthDigit){
        cy.get(login_Element.loginElementLocators.FourthOTP).type(FourthDigit)
      }
}