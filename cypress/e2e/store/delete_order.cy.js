/// <reference types="cypress" />

describe('Teste de deletar uma ordem', () => {
    it('Deletar uma ordem existente com sucesso', () => {
        const orderId = 120;

        cy.request({
            method: 'DELETE',
            url: `https://petstore.swagger.io/v2/store/order/${orderId}`,
        }).then((response) => {
            expect(response.status).to.eq(200);
        });

        cy.request({
            method: 'GET',
            url: `https://petstore.swagger.io/v2/store/order/${orderId}`,
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(404);
        });
    });
});
