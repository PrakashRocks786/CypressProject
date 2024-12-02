const loginElementLocators = require('../PageElements/LoginPageElements.json')

export class loginPageActions
{
    username(usernamee)
    {
       cy.get(loginElementLocators.LoginPageLocators.username_txt).type(usernamee)
       return
    }
    password(passwordd)
    {
       cy.get(loginElementLocators.LoginPageLocators.password_txt).type(passwordd)
       return
    }
    LoginButton()
    {
       cy.get(loginElementLocators.LoginPageLocators.login_button).click();
    }
}