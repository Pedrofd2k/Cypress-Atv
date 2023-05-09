/// <reference types="cypress" />

describe('Teste de logout do usuário', () => {
    it('Realizar logout com sucesso', () => {
        cy.request({
            method: 'GET',
            url: 'https://petstore.swagger.io/v2/user/logout',
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });
});
