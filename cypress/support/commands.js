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

import locator from "./locators";

Cypress.Commands.add('login', (email, password) => { 
    cy.get(locator.LOGIN.EMAIL_ADDRESS).type(email)
    cy.get(locator.LOGIN.PASSWORD).type(password)
    cy.get(locator.LOGIN.BTN_LOGIN).click()
})

Cypress.Commands.add('loginRequest', (email, password) => { 
    cy.request({
        method: 'POST',
        url: '/index.php?controller=authentication',
        body: {
            email: email,
            passwd: password,
            back: 'my-account',
            SubmitLogin: ''
        },
        form: true,               // Envia como `form-urlencoded`
        followRedirect: false     // Impede que o Cypress siga o redirecionamento
    })
})