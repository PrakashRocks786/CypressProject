import 'cypress-file-upload';
import { blueLionLoginAction } from '../../PageObjects/PageActions/blueLionLoginAction';


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types = "cypress" />
/// <reference types = "cypress-xpath"/>

module.exports = {
    defaultCommandTimeout: 10000, // sets a 10-second timeout for all commands
  }
  const Login_Action = new blueLionLoginAction

  Cypress.Commands.add('loginWithSession',(username,password)=>{
    cy.session([username,password],()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").clear().type(username)
        cy.get("input[placeholder='Password']").clear().type(password)
        cy.get("button[type='submit']").click()
    })
  })

  Cypress.Commands.add('loginBlueLion',(phoneNumber,FirstDigit,SecondDigit,ThirdDigit,FourthDigit)=>{
    cy.session([phoneNumber,FirstDigit,SecondDigit,ThirdDigit,FourthDigit],()=>{
        cy.visit("https://www.bluelionlifestyle.com/login");
        cy.get("#phoneInput").clear().type(phoneNumber)
        cy.get("button[type='submit']").click()
        cy.get(":nth-child(1) > .form-control").type(FirstDigit)
        cy.get(":nth-child(2) > .form-control").type(SecondDigit)
        cy.get(":nth-child(3) > .form-control").type(ThirdDigit)
        cy.get(":nth-child(4) > .form-control").type(FourthDigit)
    })
  })
