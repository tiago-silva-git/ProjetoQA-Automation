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

// features
Cypress.Commands.add('login', (email, password) => { 
    cy.get(locator.LOGIN.EMAIL_ADDRESS).type(email)
    cy.get(locator.LOGIN.PASSWORD).type(password)
    cy.get(locator.LOGIN.BTN_LOGIN).click()
})

Cypress.Commands.add('product_selection', (quantity_of_products) => {
    cy.get(locator.MY_ACCOUNT.HEADER_MENU).contains('Women').click()
    cy.get(locator.MY_ACCOUNT.BLOUSE_OPTION).click()
    cy.get(locator.MY_ACCOUNT.CHANGE_COLOR).click()

    // Loop to add the product to the desired quantity
    for (let i = 0; i < quantity_of_products; i++) {
        cy.get(locator.MY_ACCOUNT.ADD_MORE).click()
    }

    cy.get(locator.MY_ACCOUNT.ADD_TO_CART).click()
    cy.get(locator.MY_ACCOUNT.BTN_ACCESS_TO_CART).click()
})

Cypress.Commands.add('purchase', (payment_method) => {
    cy.get(locator.STEPS_TO_PURCHASE.BTN_PROCEED_TO_CHECKOUT).click().wait(500)
    cy.get(locator.STEPS_TO_PURCHASE.BTN_PROCEED_TO_CHECKOUT).click()
    cy.get(locator.STEPS_TO_PURCHASE.ACCEPT_TERMS).click()
    cy.get(locator.STEPS_TO_PURCHASE.BTN_PROCEED_TO_CHECKOUT).click()

    if (payment_method == 'payment_card') {
        cy.get(locator.STEPS_TO_PURCHASE.CARD_PAYMENT).click()
    } else if ('bank_slip') {
        cy.get(locator.STEPS_TO_PURCHASE.BANK_SLIP_PAYMENT).click()
    }

    cy.get(locator.STEPS_TO_PURCHASE.BTN_CONFIRM_ORDER).click()
    
    cy.get(locator.STEPS_TO_PURCHASE.ORDER_INFORMATION).invoke('text').then((full_text) => {
        const regex = /order reference (\w+) in the subject/;
        const result = full_text.match(regex);
    
          if (result) {
            const order_reference = result[1];
            cy.wrap(order_reference).as('orderReference');
          } else {
            cy.log('Reference code not found.');
          }
    });

    cy.get(locator.STEPS_TO_PURCHASE.BTN_VIEW_HISTORY).click()
})

// backend
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