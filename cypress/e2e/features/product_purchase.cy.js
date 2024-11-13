/// <reference types="cypress" />

import locator from "../../support/locators";

describe('Purchase Flow', () => {
    beforeEach(() => {
      //Arrange
      cy.visit('/')
    })
  
    it.only('Product purchase available - Logged In', () => {
        // Act
        cy.get(locator.MY_ACCOUNT.HOME_BTN_LOGIN).click()
        cy.login('TestQaT@gmail.com', 'TestQa321')

        cy.get(locator.MY_ACCOUNT.HEADER_MENU).contains('Women').click()
        cy.get(locator.MY_ACCOUNT.BLOUSE_OPTION).click()
        cy.get(locator.MY_ACCOUNT.CHANGE_COLOR).click()
        cy.get(locator.MY_ACCOUNT.ADD_MORE).click()
        cy.get(locator.MY_ACCOUNT.ADD_TO_CART).click()
        // TODO finish mapping the locators
        // Assert

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