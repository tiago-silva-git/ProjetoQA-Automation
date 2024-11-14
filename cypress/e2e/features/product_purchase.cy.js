/// <reference types="cypress" />

import locator from "../../support/locators";

describe('Purchase Flow', () => {
    beforeEach(() => {
      //Arrange
      cy.visit('/')
    })

    it.only('Product purchase available - Logged In', () => {
        // Act
        cy.get(locator.HOME.HOME_BTN_LOGIN).click()
        cy.login('TestQaT@gmail.com', 'TestQa321')

        cy.product_selection(3)

        cy.purchase('payment_card') // payment_card or bank_slip

        // Assert
        cy.get('@orderReference').then(response => {
            cy.get(locator.ORDER_HISTORY.ORDER_REFERENCE).should('contain', response)
            cy.url().should('equal', 'http://www.automationpractice.pl/index.php?controller=history')
        })
    })

    it('Purchase of product not available - Logged in', () => {
        // Act

        // Assert

    })

    it('Product Purchase Available - Logged Out', () => {
        // Act

        // Assert

    });
  })