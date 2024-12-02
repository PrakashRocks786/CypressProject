const Orders_Elements = require('../PageElements/BlueLionOrderElements.json')

export class BlueLionOrderActions {
    HomePageProduct() {
        cy.get(Orders_Elements.BlueLionOrderLocators.product_locator).click()
    }

    AddProductToCart() {
        cy.get(Orders_Elements.BlueLionOrderLocators.Add_To_Cart_locator).click()
    }

    TypePhoneNumberToLogin(phoneNumber) {
        cy.get(Orders_Elements.BlueLionOrderLocators.Phone_Number_To_Login).type(phoneNumber)
    }

    ClickLoginButton()
    {
        cy.get(Orders_Elements.BlueLionOrderLocators.Login_Phone_Number).click()
    }

    FirstDigitOtp(FirstDigit)
    {
       cy.get(Orders_Elements.BlueLionOrderLocators.First_Digit_OTP).type(FirstDigit)
    }

    SecondDigitOtp(SecondDigit)
    {
       cy.get(Orders_Elements.BlueLionOrderLocators.Second_Digit_OTP).type(SecondDigit)
    }

    ThirdDigitOtp(ThirdDigit)
    {
       cy.get(Orders_Elements.BlueLionOrderLocators.Third_Digit_OTP).type(ThirdDigit)
    }

    FourthDigitOtp(FourthDigit)
    {
      cy.get(Orders_Elements.BlueLionOrderLocators.Fourth_Digit_OTP).type(FourthDigit)
    }

    ProceedToCheckOut()
    {
        cy.get(Orders_Elements.BlueLionOrderLocators.Proceed_To_Checkout).click()
    }

    NoAddressAddedYet() {
        cy.get(Orders_Elements.BlueLionOrderLocators.No_Address_Added_Yet).click()
    }
    
    AddANewAddress() {
        cy.get(Orders_Elements.BlueLionOrderLocators.Add_a_new_Address).click()
    }

    FirstAddressLine(AddressLineFirst)
    {
        cy.get(Orders_Elements.BlueLionOrderLocators.Address_Line_1).type(AddressLineFirst)
        
    }
    
    SecondAddressLine(AddressLineSecond)
    {
       cy.get(Orders_Elements.BlueLionOrderLocators.Address_Line_2).type(AddressLineSecond)
    }

    AddCity(City)
    {
       cy.get(Orders_Elements.BlueLionOrderLocators.City).type(City)
    }

    AddPostalCard(PostalCode)
    {
       cy.get(Orders_Elements.BlueLionOrderLocators.Postal_Code).type(PostalCode)
    }

    AddCountry(Country)
    {
    cy.get(Orders_Elements.BlueLionOrderLocators.Country).type(Country)
    }
    
    PlaceOrder() {
        cy.get(Orders_Elements.BlueLionOrderLocators.Place_Order).click()
    }
    
}
