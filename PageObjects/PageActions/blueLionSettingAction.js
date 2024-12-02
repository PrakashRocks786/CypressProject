const Setting_Element = require("../PageElements/blueLionSettingElement.json")
export class blueLionSettingAction{
    ClickUserImage(){
        cy.get(Setting_Element.SettingElementLocators.User_Icon).click()
    }

    ClickSetting(){
        cy.get(Setting_Element.SettingElementLocators.Setting_Button).click()
    }

    FirstName(firstName){
        cy.get(Setting_Element.AccountSettingLocators.Account_First_Name).clear().type(firstName)
    }

    LastName(lastName){
        cy.get(Setting_Element.AccountSettingLocators.Account_Last_Name).clear().type(lastName)
    }

    Bio(bio){
        cy.get(Setting_Element.AccountSettingLocators.Account_Bio).clear().type(bio)
    }

    Gender(gender){
        cy.get(Setting_Element.AccountSettingLocators.Account_Gender).select(gender)
    }

    MaritalStatus(maritalStatus){
        cy.get(Setting_Element.AccountSettingLocators.Account_MaritalStatus).select(maritalStatus)
    }

    SettingSaveButton(){
        cy.get(Setting_Element.AccountSettingLocators.AccountSetting_SaveButton).click()
    }

    EmailTab(){
        cy.get(Setting_Element.AccountSettingLocators.Email_Tab).should('be.visible').click()
    }

    EmailInputFeild(){
        cy.get(Setting_Element.AccountSettingLocators.Email_Feild).clear().type('automation@gmail.com')
    }

    EmailSend(){
        cy.get(Setting_Element.AccountSettingLocators.Email_Send).click()
    }

    CheckEmailPopUpVisibility(){
        cy.get(Setting_Element.AccountSettingLocators.Email_Popup_Text).should('be.visible')
    }

    EmailOTPInputFeild(EmailOTP){
        cy.get(Setting_Element.AccountSettingLocators.Email_OTP_Feild).type(EmailOTP)
    }

    EmailVerifyBtton(){
        cy.get(Setting_Element.AccountSettingLocators.Email_Verify_Button).click()
    }

    PhoneNumberTab(){
        cy.get(Setting_Element.AccountSettingLocators.Pnone_No_Tab).click()
    }

    PhoneNumberInput(phoneNumber){
        cy.get(Setting_Element.AccountSettingLocators.Phone_No_Input).clear().type(phoneNumber)
    }

    PhoneNumberSendButton(){
        cy.get(Setting_Element.AccountSettingLocators.Phone_No_SendButton).click()
    }

    AddressTab(){
        cy.get(Setting_Element.AccountSettingLocators.Address_Tab).click()
    }

    AddNewAddress(){
        cy.get(Setting_Element.AccountSettingLocators.Add_New_Address_Button).click()
    }

    AddAddressTextVisibility(){
        cy.get(Setting_Element.AccountSettingLocators.Add_Address_Text_Visibility).should('be.visible')
    }

    AddressLine1(AddressLine_1){
        cy.get(Setting_Element.AccountSettingLocators.Address_Line_1).type(AddressLine_1)
    }

    AddressLine2(AddressLine2){
        cy.get(Setting_Element.AccountSettingLocators.Address_Line_2).type(AddressLine2)
    }

    AddressCity(City){
        cy.get(Setting_Element.AccountSettingLocators.Address_City).type(City)
    }

    AddressPostalCode(PostalCode){
        cy.get(Setting_Element.AccountSettingLocators.Address_Postal_Code).type(PostalCode)
    }

    AddressCountry(Country){
        cy.get(Setting_Element.AccountSettingLocators.Address_Country).select('India')
    }

    SaveAddress(){
        cy.get(Setting_Element.AccountSettingLocators.Save_Address_Button).click()
    }

    EditAddressButton(){
        cy.get(Setting_Element.AccountSettingLocators.Edit_Address_Button).click()
    }

    UpdateTextVisibility(){
        cy.get(Setting_Element.AccountSettingLocators.Update_Text_Visibility).should('contain', 'Update Address').and('be.visible');
    }

    UpdateAddressLine1(UpdateAddressLine1){
        cy.get(Setting_Element.AccountSettingLocators.Update_Address_Line_1).clear().type(UpdateAddressLine1)
    }

    UpdateAddressLine2(UpdateAddressLine2){
        cy.get(Setting_Element.AccountSettingLocators.Update_Address_Line_2).clear().type(UpdateAddressLine2)
    }

    UpdateAddressCity(UpdateCity){
        cy.get(Setting_Element.AccountSettingLocators.Update_Address_City).clear().type(UpdateCity)
    }

    UpdateAddressPostalCode(UpdatePostalCode){
        cy.get(Setting_Element.AccountSettingLocators.Update_Address_Postal_Code).clear().type(UpdatePostalCode)
    }

    UpdateAddressCountry(){
        cy.get(Setting_Element.AccountSettingLocators.Update_Address_Country).select('Australia')
    }

    UpdateAddress_Save(){
        cy.get(Setting_Element.AccountSettingLocators.Update_Address_Save).click()
    }

    DeleteAddress(){
        cy.get(Setting_Element.AccountSettingLocators.Delete_Address).click()
    }


}