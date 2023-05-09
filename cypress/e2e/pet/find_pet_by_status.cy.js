/// <reference types="cypress" />

describe('Teste de buscar pets por status', () => {
    it('Buscar pets com status "available" com sucesso', () => {
        cy.request({
            method: 'GET',
            url: 'https://petstore.swagger.io/v2/pet/findByStatus',
            qs: { status: 'available' },
        }).then((response) => {
            expect(response.status).to.eq(200);
            response.body.forEach((pet) => {
                expect(pet).to.have.property('status', 'available');
            });
        });
    });
});
