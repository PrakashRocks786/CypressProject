import { blueLionLoginAction } from "../../../PageObjects/PageActions/blueLionLoginAction"
import { blueLionSettingAction } from "../../../PageObjects/PageActions/blueLionSettingAction"


const Setting_Action = new blueLionSettingAction
const Login_Action = new blueLionLoginAction

describe('Setting Page', () => {

    beforeEach(()=>{
        cy.loginBlueLion("7676773398","1","1","1","1")
        cy.visit("https://www.bluelionlifestyle.com/user-dashboard")
    })

    it('Fill Account Details', () => {
        Setting_Action.ClickUserImage();
        Setting_Action.ClickSetting();
        cy.fixture('blueLionSettingData').then((data) => {
            Setting_Action.FirstName(data.firstName);
            Setting_Action.LastName(data.lastName);
            Setting_Action.Gender(data.gender);
            Setting_Action.MaritalStatus(data.maritalStatus);
            Setting_Action.Bio(data.bio);
            Setting_Action.SettingSaveButton();
        });
    });

    it('Updates new Email', () => {
        cy.visit("https://www.bluelionlifestyle.com/user-settings")
        Setting_Action.EmailTab();
        cy.fixture('blueLionSettingData').then((data) => {
            Setting_Action.EmailInputFeild();
            Setting_Action.EmailSend();
            Setting_Action.CheckEmailPopUpVisibility();
            Setting_Action.EmailOTPInputFeild(data.EmailOTP);
            Setting_Action.EmailVerifyBtton();
        });
    });

    it('Updates new Phone Number', () => {
        cy.visit("https://www.bluelionlifestyle.com/user-settings")
        cy.fixture('blueLionSettingData').then((data) => {
            Setting_Action.PhoneNumberTab();
            Setting_Action.PhoneNumberInput(data.phoneNumber);
            Setting_Action.PhoneNumberSendButton();
            cy.wait(2000);
        });
    });

    it('Add New Address', () => {
        cy.visit("https://www.bluelionlifestyle.com/user-settings")
        cy.fixture('blueLionSettingData').then((data) => {
            Setting_Action.AddressTab();
            Setting_Action.AddNewAddress();
            Setting_Action.AddAddressTextVisibility();
            Setting_Action.AddressLine1(data.AddressLine1);
            Setting_Action.AddressLine2(data.AddressLine2);
            Setting_Action.AddressCity(data.City);
            Setting_Action.AddressPostalCode(data.PostalCode);
            Setting_Action.AddressCountry(data.Country);
            cy.wait(2000);
            Setting_Action.SaveAddress();
            cy.wait(3000);
        });
    });

    it('Update Address', () => {
        cy.visit("https://www.bluelionlifestyle.com/user-settings")
        Setting_Action.AddressTab();
        cy.fixture('blueLionSettingData').then((data) => {
            Setting_Action.EditAddressButton()
            Setting_Action.UpdateTextVisibility()
            Setting_Action.UpdateAddressLine1(data.UpdateAddressLine1)
            Setting_Action.UpdateAddressLine2(data.UpdateAddressLine2)
            Setting_Action.UpdateAddressCity(data.UpdateCity)
            Setting_Action.UpdateAddressPostalCode(data.UpdatePostalCode)
            Setting_Action.UpdateAddressCountry(data.UpdateAddressCountry)
            cy.wait(2000)
            Setting_Action.UpdateAddress_Save()
        });
    });

    it('Delete Address',()=>{
        cy.visit("https://www.bluelionlifestyle.com/user-settings")
        Setting_Action.AddressTab()
        Setting_Action.DeleteAddress()
    })
})


