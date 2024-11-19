/// <reference types="cypress" />

describe('Login page', () => {
  
    it('Valid login', () => {
        // Act
        cy.loginRequest("TestQaT@gmail.com", "TestQa321").as('response')
        
        // Assert
        cy.get('@response').then(result => {
            expect(result.status).to.eq(302);
        })
    })

    it('Login with incorrect password', () => {
        // Act
        cy.loginRequest("TestQaT@gmail.com", 'TestQa123').as('response')
        
        // Assert
        cy.get('@response').then(result => {
            expect(result.status).to.eq(200);
            expect(result.body).contains("Authentication failed.");
        })
    })

    it('Login with unregistered email', () => {
        // Act
        cy.loginRequest('TTTTT@gmail.com', 'TestQa123').as('response')
        
        // Assert
        cy.get('@response').then(result => {
            expect(result.status).to.eq(200);
            expect(result.body).contains("Authentication failed.");
        })
    });
  })