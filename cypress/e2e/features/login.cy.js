/// <reference types="cypress" />

import locator from "../../support/locators";

describe('Login page', () => {
    beforeEach(() => {
      //Arrange
      cy.visit('/index.php?controller=authentication&back=my-account')
    })
  
    it('Valid login', () => {
        // Act
        cy.login('TestQaT@gmail.com', 'TestQa321')

        // Assert
        cy.get(locator.LOGIN.MY_ACCOUNT_TITLE).should( "have.text", "My account" );
        cy.url().should('equal', 'http://www.automationpractice.pl/index.php?controller=my-account')
    })
  
    it('Login with incorrect password', () => {
        // Act
        cy.login('TestQaT@gmail.com', 'TestQa123')

        // Assert
        cy.get(locator.LOGIN.ERROR_MESSAGE).should( "contain", "Authentication failed." );
        cy.url().should('equal', 'http://www.automationpractice.pl/index.php?controller=authentication')
    })

    it('Login with unregistered email', () => {
        // Act
        cy.login('TTTTT@gmail.com', 'TestQa321')

        // Assert
        cy.get(locator.LOGIN.ERROR_MESSAGE).should( "contain", "Authentication failed." );
        cy.url().should('equal', 'http://www.automationpractice.pl/index.php?controller=authentication')
    });
  })