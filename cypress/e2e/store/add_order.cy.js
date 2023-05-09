/// <reference types="cypress" />

describe('Teste de adicionar uma ordem', () => {
    it('Adicionar uma nova ordem com sucesso', () => {
        const order = {
            id: 120,
            petId: 1,
            quantity: 2,
            shipDate: '2023-05-10T14:48:00.000Z',
            status: 'placed',
            complete: false,
        };

        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/store/order',
            body: order,
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id', order.id);
            expect(response.body).to.have.property('petId', order.petId);
            expect(response.body).to.have.property('status', order.status);
        });
    });
});
