/// <reference types="cypress" />

describe('Teste de obter usuário pelo nome de usuário', () => {
    it('Obter um usuário com sucesso pelo nome de usuário', () => {
        const username = 'testuser2';  // Substitua pelo nome de usuário desejado

        cy.request({
            method: 'GET',
            url: `https://petstore.swagger.io/v2/user/${username}`,
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.username).to.eq(username);
        });
    });
});