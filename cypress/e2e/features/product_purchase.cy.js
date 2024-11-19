/// <reference types="cypress" />

import locator from "../../support/locators";

describe('Purchase Flow', () => {
    beforeEach(() => {
      //Arrange
      cy.visit('/')
    })

    it('Product purchase available - Logged In', () => {
        // Act
        cy.get(locator.HOME.HOME_BTN_LOGIN).click()

        cy.login('TestQaT@gmail.com', 'TestQa321')
        cy.product_selection() // increase the quantity of the selected product 1, 2, 3...
        cy.purchase('payment_card') // payment_card or bank_slip

        // Assert
        cy.get('@orderReference').then(response => {
            cy.get(locator.ORDER_HISTORY.ORDER_REFERENCE).should('contain', response)
            cy.url().should('equal', 'http://www.automationpractice.pl/index.php?controller=history')
        })
    })

    it('Purchase of product not available - Logged in', () => {
        // Act
        cy.get(locator.HOME.HOME_BTN_LOGIN).click()

        cy.login('TestQaT@gmail.com', 'TestQa321')
        cy.get(locator.MY_ACCOUNT.HEADER_MENU).contains('Women').click()
        cy.get(locator.MY_ACCOUNT.PRODUCT_LIST).first().click()

        // Assert
        cy.get(locator.DETAIL_PRODUCT.MESSAGE_PRODUCT_NOT_IN_STOCK).should('have.text', 'This product is no longer in stock')
        cy.url().should('equal', 'http://www.automationpractice.pl/index.php?id_product=1&controller=product')
    })

    it.skip('Product Purchase Available - Logged Out', () => {
        // Act
        cy.visit('http://www.automationpractice.pl/')
        cy.product_selection() // increase the quantity of the selected product 1, 2, 3...

        // Assert

    });
  })
