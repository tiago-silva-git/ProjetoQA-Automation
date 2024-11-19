/// <reference types="cypress" />

describe('Purchase Flow', () => {
  
    it.only('Product purchase available - Logged In', () => {
        // Act
        cy.loginRequest("TestQaCypress@gmail.com", "TestQa321")

        cy.request('GET', '/index.php?controller=my-account').then((response) => {
            expect(response.status).to.eq(200);
        }); // load my account page

        cy.request('GET', '/index.php?id_category=3&controller=category').then((response) => {
            expect(response.status).to.eq(200);
        }); // select product category

        cy.request('GET', '/index.php?id_product=2&controller=product').then((response) => {
            expect(response.status).to.eq(200);
        }); // select product

        cy.request({
            method: 'POST',
            url: '/index.php?rand=1731936720090',
            body: {
                "controller": "cart",
                "add": 1,
                "ajax": true,
                "qty": 2,
                "id_product": 2,
                "token": "1cb1a8723780e2acd975c0557ab84fba",
                "ipa": 8
            }}).then(response => {
            expect(response.status).to.eq(200);
        }); // add to card

        cy.request('GET', '/index.php?controller=order').then((response) => {
            expect(response.status).to.eq(200);
        }); // Shopping-cart summary

        cy.request('GET', '/index.php?controller=order&step=1').then((response) => {
            expect(response.status).to.eq(200);
        }); // Addresses

        cy.request({
            method: 'POST',
            url: '/index.php?controller=order',
            body: {
                "id_address_delivery": 10525,
                "same": 1,
                "message": "",
                "step": 2,
                "back": "",
                "processAddress": ""
            }}).then(response => {
            expect(response.status).to.eq(200);
        }); // Shipping

        cy.request({
            method: 'POST',
            url: '/index.php?controller=order',
            body: {
                "delivery_option[10525]": 2,
                "cgv": 1,
                "message": "",
                "step": 3,
                "back": "",
                "processCarrier": ""
            }}).then(response => {
            expect(response.status).to.eq(200);
        }); // Please choose your payment method

        cy.request('GET', '/index.php?fc=module&module=bankwire&controller=payment').then((response) => {
            expect(response.status).to.eq(200);
        }); // Order summary

        cy.request({
            method:"POST",
            url: "/index.php?fc=module&module=bankwire&controller=validation", 
        }).as('confirmation'); // Order confirmation

        // Assert
        cy.get('@confirmation').then(getResponse => {
            expect(getResponse.body).to.contain("View my customer account");
            expect(getResponse.status).to.equal(200);
        });
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