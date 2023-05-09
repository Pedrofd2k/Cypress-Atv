/// <reference types="cypress" />

describe('Teste de buscar uma ordem por ID', () => {
    it('Buscar uma ordem existente com sucesso', () => {
      const orderId = 120;
  
      cy.request({
        method: 'GET',
        url: `https://petstore.swagger.io/v2/store/order/${orderId}`,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', orderId);
      });
    });
  });
  